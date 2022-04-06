using System;
using System.Text;
// See https://aka.ms/new-console-template for more information


            System.Random random = new System.Random(); 
            string user;
            string[] elements = {"Rock", "Paper", "Scissors"};
            

            while (true) {
                string pc = elements[random.Next(0,3)];
                Console.Write("\nRock (1), Paper (2) or Scissors (3)\n:");
                string? option = Console.ReadLine();
                if (option == null)
                {
                    continue;
                }
                else {
                    try {
                        user = elements[int.Parse(option) -1];
                        Console.WriteLine(user);
                    }
                    catch
                    {
                        continue;
                    }
                }

                Console.WriteLine("\n\n User: " + user + "\nCPU: " + pc);

                if (pc == "Rock")
                {
                    if (user == "Rock")
                    {
                        Console.WriteLine("Draw");
                    }
                    else if (user == "Paper")
                    {
                        Console.WriteLine("You Won!!");
                    }
                    else 
                    {
                        Console.WriteLine("CPU Won!!");
                    }
                }
                else if (pc == "Paper")
                {
                    if (user == "Rock")
                    {
                        Console.WriteLine("CPU Won!!");
                    }
                    else if (user == "Paper")
                    {
                        Console.WriteLine("Draw");
                    }
                    else 
                    {
                        Console.WriteLine("You Won!!");
                    }
                }
                else 
                {
                    if (user == "Rock")
                    {
                        Console.WriteLine("You Won!!");
                    }
                    else if (user == "Paper")
                    {
                        Console.WriteLine("CPU Won!!");
                    }
                    else 
                    {
                        Console.WriteLine("Draw");
                    }
                }

            }