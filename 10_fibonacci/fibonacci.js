const fibonacci = function(sequenceIndex) {
    sequenceIndex = Number(sequenceIndex);
    if ((sequenceIndex === NaN) || (sequenceIndex <= 0)) return 'OOPS';
    else if ((sequenceIndex === 1) || (sequenceIndex === 2)) return 1;
    else {
        let sequenceMember;
        let sequenceMemberMinus1 = 1;
        let sequenceMemberMinus2 = 1;
        for (let i = 3; i <= sequenceIndex; i++) {
            sequenceMember = sequenceMemberMinus1 + sequenceMemberMinus2;
            sequenceMemberMinus2 = sequenceMemberMinus1;
            sequenceMemberMinus1 = sequenceMember;
        }
        return sequenceMember;
    }
};

// Do not edit below this line
module.exports = fibonacci;