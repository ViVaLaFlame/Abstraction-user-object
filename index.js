const UserProfileManager = () => {
    let users = [];
    let currentId = 1;

    const generateId = () => currentId++;

    return {
        addUser: userInfo => {
            const user = { ...userInfo, id: generateId() };
            users.push(user);
            return user;
        },
        removeUser: userId => {
            users = users.filter(user => user.id !== userId);
        },
        updateUser: (userId, newInfo) => {
            users = users.map(user => user.id === userId ? { ...user, ...newInfo } : user);
        },
        findUserByName: name => {
            return users.filter(user => user.name.includes(name));
        },
        getAllUsers: () => users
    };
};

const profileManager = UserProfileManager();

profileManager.addUser({ name: "Alice", email: "alice@example.com" });
profileManager.addUser({ name: "Bob", email: "bob@example.com" });

console.log(profileManager.getAllUsers()); // Выводит информацию о Alice и Bob

profileManager.updateUser(1, { name: "Alicia" }); // Обновляет имя Alice на Alicia
profileManager.removeUser(2); // Удаляет Bob

console.log(profileManager.findUserByName("Ali")); // Находит Alicia