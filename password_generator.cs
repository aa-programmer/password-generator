using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<char> characters = new List<char>(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=[]{}|;:'\",.<>?/~`"
        );

        Console.Write("Enter the Length of the Password: ");
        string input = Console.ReadLine();

        if (!int.TryParse(input, out int len))
        {
            Console.WriteLine("Invalid input. Please enter a number.");
            return;
        }

        Random rand = new Random();
        string password = "";

        for (int i = 0; i < len; i++)
        {
            int index = rand.Next(characters.Count);
            password += characters[index];
        }

        Console.WriteLine("Generated Password: " + password);
    }
}
