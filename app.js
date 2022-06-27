const profileDataArr = process.argv.slice(2, process.argv.length);
console.log(profileDataArr);


const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }
};

profileDataArr.forEach((profileItem) => console.log(profileItem));

printProfileData(profileDataArr);