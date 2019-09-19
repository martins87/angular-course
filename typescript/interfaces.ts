interface User {
    username: string;
    password: string;
    // the ? sign means that this attribute is optional
    confirmPassword?: string;
}

let user: User;

user = {
    username: 'daniel',
    password: 'secretsecret'
};

interface CanDrive {
    accelerate(speed: number): void;
}

let car:CanDrive = {
    accelerate: function(speed: number) {
        // ...
    }
}
