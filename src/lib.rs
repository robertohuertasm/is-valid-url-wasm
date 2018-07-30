#![feature(use_extern_macros)]
extern crate url;
extern crate wasm_bindgen;

use url::Url;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn is_url(input: &str) -> bool {
    Url::parse(input).is_ok()
}

#[cfg(test)]
mod tests {
    #[test]
    fn return_true_if_url_is_correct() {
        assert_eq!(super::is_url("http://isurl.com/parse/this"), true);
    }

    #[test]
    fn return_false_if_url_is_no_correct() {
        assert_eq!(super::is_url("this/my/url"), false);
    }

}
