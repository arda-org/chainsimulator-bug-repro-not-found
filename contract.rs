#![no_std]

multiversx_sc::imports!();

#[multiversx_sc::contract]
pub trait Contract {
    #[init]
    fn init(&self) {}

    #[endpoint]
    fn compute(&self) {
        let mut a = BigUint::from(2u64);
        for _ in 1..18 {
            a = a.clone() * a;
        }
    }
}
