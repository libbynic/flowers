export function registerUser(email, password) {
    console.log(`register user with email: ${email} and password: ${password}`);

    //localStorage.getItem('users');
    const textStorage = (localStorage.getItem('users') || '[]');
    const users = JSON.parse(textStorage);

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
}
export function loginUser(email, password) {
    console.log(`register user with email: ${email} and password: ${password}`);

    //localStorage.getItem('users');
    const textStorage = (localStorage.getItem('users') || '[]');
    const users = JSON.parse(textStorage);

    return users.find(u => u.email === email && u.password === password);
}