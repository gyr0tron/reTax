pragma solidity >=0.5.0 <0.7.0;

contract GenerateBill {
    address[] public deployedBills;
    uint public minimumTax; //min tax bracket to be provided to constructor
    mapping(address => bool) public voters; //hash of voters
    uint public votersCount; //total no of voters
    address payable newBill;
    
    constructor(uint minimum) public {
        minimumTax = minimum;
    }
    
    function createBill(string memory billName, string memory ipfsHash, string memory details) public {
        address temp = address(new Bill(msg.sender, address(this), billName, ipfsHash, details));
        newBill = address(uint160(temp));
        deployedBills.push(newBill);
    }
    
    function payTax() public payable {
        require(msg.value > minimumTax);
        if(!voters[msg.sender]) {
            voters[msg.sender] = true;
            votersCount++;
        }
    }
    
    function getTotalTax() public view returns (uint256) {
        return address(this).balance;
    }
    
    function sendTaxToPlan(uint256 amount) public {
        newBill.transfer(amount);
    }
    
    function getDeployedBills() public view returns (address[] memory) {
        return deployedBills;
    }
}

contract Bill {
    GenerateBill newGenerateBill;
    
    // owner is politician
    struct Plan {
        string description;
        uint value;
        address payable recipient;
        bool complete;
        uint approveVoteCount; // no of voters voting yes, no vote = decline
        mapping(address => bool) votes;
    }
    
    
    Plan[] public plans; //arr of plans
    address public politician;
    string public billDescription;
    string public ipfsHash;
    string public billDetails;
    // uint public votersCount; //total no of voters
    
    
    modifier restricted() {
        require(msg.sender == politician);
        _;
    }
    
    constructor(address generator, address GeneratorContractAddress, string memory billName, string memory x, string memory details) public {
        politician = generator;
        newGenerateBill = GenerateBill(GeneratorContractAddress);
        billDescription = billName;
        ipfsHash = x;
        billDetails = details;
    }
    
    // function getVotersCount() public returns (uint256) {
    //     return testContract.val();
    // }
    
    function() external payable {
    // nothing to do
    }
    
    function getHash() public view returns (string memory x) {
        return ipfsHash;
    }
    
    function createPlan(
        string memory description,
        uint value,
        address payable recipient
        )
        public restricted {
        Plan memory newPlan = Plan({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approveVoteCount: 0
        });
        plans.push(newPlan);
    }
    
    function approvePlan(uint index) public {
        Plan storage plan = plans[index];
        require(newGenerateBill.voters(msg.sender));
        require(!plan.votes[msg.sender]);
        plan.votes[msg.sender] = true;
        plan.approveVoteCount++;
    }
    
    function getBillVal() public view returns (uint256) {
        return address(this).balance;
    }
    
    function finalizePlan(uint index) public restricted {
        Plan storage plan = plans[index];
        require(plan.approveVoteCount > (newGenerateBill.votersCount() / 2));
        require(!plan.complete);
        newGenerateBill.sendTaxToPlan(plan.value);
        //generator -> bill -> plan
        plan.recipient.transfer(plan.value);
        plan.complete = true;
    }

    function getSummary() public view returns (uint, uint, address) {
        return(
            plans.length,
            newGenerateBill.votersCount(),
            politician
        );
    }

    function getPlansCount() public view returns (uint) {
        return plans.length;
    }
}
