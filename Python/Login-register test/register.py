

while True:
    print('\nRegister (R) or Show (S)?')
    choose = input(": ")

    if choose == 'r':
        while True:
            user = input('\nUsername: ')
            password = input("Password: ")
            print(f'\n Username: {user}\n Password: {password}')
            a = input('Its that it?: ')
            if a == 'y':
                break
            else:
                continue
        
        f = open("accounts.txt", "a")
        f.write(f"\n{user}/{password}")
        f.close()
    elif choose == 's':
        f = open("accounts.txt", "r")
        data = f.read()
        raw = data.split('\n')
        contas = []
        for n in raw:
            conta = n.split('/')
            conta.append({username : conta[0], password : conta[1]})
        print('\n')
        print(contas)
        input(': ')
