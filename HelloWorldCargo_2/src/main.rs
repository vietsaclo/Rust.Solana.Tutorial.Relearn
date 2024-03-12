use std::mem::size_of_val;

fn main() {
  println!("Hello, world!");
  
  let number_i = 2222;
  println!("number_i: {}", number_i);
  println!("size of number_i: {}", size_of_val(&number_i));
}
