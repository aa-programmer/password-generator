use rand::Rng;
use std::io;

fn main() {
    let characters: Vec<char> = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=[]{}|;:'\",.<>?/~`"
        .chars()
        .collect();

    println!("Enter the length of the password:");

    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Failed to read input");

    let length: usize = match input.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Invalid number!");
            return;
        }
    };

    let mut rng = rand::thread_rng();
    let password: String = (0..length)
        .map(|_| {
            let idx = rng.gen_range(0..characters.len());
            characters[idx]
        })
        .collect();

    println!("Generated password: {}", password);
}
