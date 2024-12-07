class User{
    name
    email
    viewData()
    {
        console.log(name);
        console.log(email);
    }
};
class Admin extends User{
    editData(name,email)
    {
        this.name=name
        this.email=email
    }
};