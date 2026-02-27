export function registerUser(email, password) {
    console.log(`register user with email: ${email} and password: ${password}`);

    //localStorage.getItem('users');
    const textStorage = (localStorage.getItem('users') || '[]');
    const users = JSON.parse(textStorage);

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    return {success: true};
}
export function loginUser(email, password) {
    console.log(`register user with email: ${email} and password: ${password}`);

    //localStorage.getItem('users');
    const textStorage = (localStorage.getItem('users') || '[]');
    const users = JSON.parse(textStorage);

    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser){
        return {success: true, user: foundUser};
    }
    else {
        return {success: false, message: "Invalid email or password"};
    }
}
//     users.push({ email, password });
//     localStorage.setItem('users', JSON.stringify(users));
// }

const imgFiles = [
    "wedding-florals.jpg",
    "flowerCenter.jpg",
    "FrenchBlooms.jpg",
    "lightBlue.jpg",
    "QuickSandRoses.jpg"
];
export function getPicture(){
    const randomIndex = Math.floor(Math.random() *imgFiles.length);
    return imgFiles[randomIndex];

}


