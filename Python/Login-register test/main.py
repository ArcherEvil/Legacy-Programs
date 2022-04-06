class Account:
    total = 0
    def __init__(self, user, password):
        self.user = user
        self.password = password
        self.text = ""
        Account.total += 1
    
    @classmethod
    def number_of_accounts(cls):
        return cls.total
    

def get_accounts():
    raw = ''
    contas = []
    returning = []
    with open("accounts.txt", encoding = 'utf-8') as file:
        raw = file.read()
    raw = raw.split('\n')
    for n in raw:
        account = n.split('/')
        contas.append({'user' : account[0], 'password' : account[1]})
    
    for n in contas:
        user = n['user']
        passw = n['password']
        classe = Account(user, passw)
        returning.append(classe)
    
    return returning
    

def login():
    logged = False
    index = 0
    while not logged:
        print('\nLogin\n')
        username = input('Enter your username: ')
        password = input('And Password: ')

        contas = get_accounts()
        for x, n in enumerate(contas):
            if n.user == username:
                if password == n.password:
                    print(f'\n Username: {n.user} \nPassword: {n.password}')
                    index = x
                    logged = True
                    break
            else:
                continue
        print('\nUsername or password incorrect.')
    print()

    
    



def hub():
    print("Login & Registration Test \n")
    escolha = input('Login, Registration or other options? (L/R/O): ')
    if escolha == 'L' or escolha == 'l':
        login()
    elif escolha == 'R' or escolha == 'r':
        #registration()
        pass
    else:
        #options()
        pass

if __name__ == '__main__':
    hub()
