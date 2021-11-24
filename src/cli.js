import readlineSync from "readline-sync";

const userName = () => {
    return readlineSync.question('May I have your name? ');
};
export default userName;