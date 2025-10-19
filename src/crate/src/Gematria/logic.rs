use std::collections::HashMap;

// --- Map ---
pub fn map() -> HashMap<char, u16> {
    let mut m = HashMap::new();
    m.insert('א', 1);
    m.insert('ב', 2);
    m.insert('ג', 3);
    m.insert('ד', 4);
    m.insert('ה', 5);
    m.insert('ו', 6);
    m.insert('ז', 7);
    m.insert('ח', 8);
    m.insert('ט', 9);
    m.insert('י', 10);
    m.insert('כ', 20);
    m.insert('ל', 30);
    m.insert('מ', 40);
    m.insert('נ', 50);
    m.insert('ס', 60);
    m.insert('ע', 70);
    m.insert('פ', 80);
    m.insert('צ', 90);
    m.insert('ק', 100);
    m.insert('ר', 200);
    m.insert('ש', 300);
    m.insert('ת', 400);
    m
}

// --- Calculate ---
pub fn calculate(word: &str) -> u16 {
    let m = Gematria::map();
    word.chars().filter_map(|c| m.get(&c)).sum()
}

// --- Format ---
pub fn format(value: u16) -> String {
    format!("Gematria value: {}", value)
}

// --- Validate ---
pub fn is_hebrew(word: &str) -> bool {
    word.chars().all(|c| ('א'..='ת').contains(&c))
}

// --- Transliterate ---
pub fn transliterate_hebrew(word: &str) -> String {
    word.to_string()
}

// --- Utilities ---
pub fn clean_hebrew_string(input: &str) -> String {
    input.chars().filter(|c| ('א'..='ת').contains(c)).collect()
}

pub fn extract_gematria_chars(word: &str) -> Vec<char> {
    word.chars().filter(|c| ('א'..='ת').contains(c)).collect()
}

pub fn count_gematria_chars(word: &str) -> usize {
    Gematria::extract_gematria_chars(word).len()
}

// --- Tests ---
#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_calculate() {
        assert_eq!(calculate("אבג"), 6);
        assert_eq!(calculate("תש"), 700);
    }
    #[test]
    fn test_is_hebrew() {
        assert!(is_hebrew("אבג"));
        assert!(!is_hebrew("abc"));
    }
}



// === Extended Semantic API ===

// --- Cleaning ---
pub fn clean_english_string(_input: &str) -> String {
    "Function clean_english_string() is open to definition.".to_string()
}
pub fn clean_mixed_string(_input: &str) -> String {
    "Function clean_mixed_string() is open to definition.".to_string()
}
pub fn remove_non_gematria_chars(_input: &str) -> String {
    "Function remove_non_gematria_chars() is open to definition.".to_string()
}

// --- Extraction ---
pub fn extract_hebrew_chars(word: &str) -> Vec<char> {
    Gematria::extract_gematria_chars(word)
}
pub fn extract_english_chars(_word: &str) -> Vec<char> {
    println!("Function extract_english_chars() is open to definition.");
    vec![]
}
pub fn extract_mixed_chars(_word: &str) -> Vec<char> {
    println!("Function extract_mixed_chars() is open to definition.");
    vec![]
}

// --- Counting ---
pub fn count_hebrew_chars(word: &str) -> usize {
    Gematria::count_gematria_chars(word)
}
pub fn count_english_chars(_word: &str) -> usize {
    println!("Function count_english_chars() is open to definition.");
    0
}
pub fn count_mixed_chars(_word: &str) -> usize {
    println!("Function count_mixed_chars() is open to definition.");
    0
}

// --- Validation ---
pub fn is_gematria_char(_c: char) -> bool {
    println!("Function is_gematria_char() is open to definition.");
    false
}
pub fn is_hebrew_string(word: &str) -> bool {
    Gematria::is_hebrew(word)
}
pub fn is_english_string(_word: &str) -> bool {
    println!("Function is_english_string() is open to definition.");
    false
}
pub fn is_mixed_string(_word: &str) -> bool {
    println!("Function is_mixed_string() is open to definition.");
    false
}
pub fn is_valid_gematria_string(word: &str) -> bool {
    Gematria::is_hebrew(word)
}
pub fn is_valid_hebrew_string(word: &str) -> bool {
    Gematria::is_hebrew(word)
}
pub fn is_valid_english_string(_word: &str) -> bool {
    println!("Function is_valid_english_string() is open to definition.");
    false
}
pub fn is_valid_mixed_string(_word: &str) -> bool {
    println!("Function is_valid_mixed_string() is open to definition.");
    false
}

// --- Values ---
pub fn get_gematria_value(word: &str) -> u16 {
    Gematria::calculate(word)
}
pub fn get_hebrew_value(word: &str) -> u16 {
    Gematria::calculate(word)
}
pub fn get_english_value(_word: &str) -> u16 {
    println!("Function get_english_value() is open to definition.");
    0
}
pub fn get_mixed_value(_word: &str) -> u16 {
    println!("Function get_mixed_value() is open to definition.");
    0
}

pub fn get_gematria_values(word: &str) -> Vec<u16> {
    word.chars().filter_map(|c| Gematria::map().get(&c).copied()).collect()
}
pub fn get_hebrew_values(word: &str) -> Vec<u16> {
    Gematria::get_gematria_values(word)
}
pub fn get_english_values(_word: &str) -> Vec<u16> {
    println!("Function get_english_values() is open to definition.");
    vec![]
}
pub fn get_mixed_values(_word: &str) -> Vec<u16> {
    println!("Function get_mixed_values() is open to definition.");
    vec![]
}

// --- Character Counts ---
pub fn get_gematria_char_count(word: &str) -> usize {
    Gematria::count_gematria_chars(word)
}
pub fn get_hebrew_char_count(word: &str) -> usize {
    Gematria::count_gematria_chars(word)
}
pub fn get_english_char_count(_word: &str) -> usize {
    println!("Function get_english_char_count() is open to definition.");
    0
}
pub fn get_mixed_char_count(_word: &str) -> usize {
    println!("Function get_mixed_char_count() is open to definition.");
    0
}

pub fn get_gematria_char_counts(word: &str) -> Vec<usize> {
    vec![Gematria::count_gematria_chars(word)]
}
pub fn get_hebrew_char_counts(word: &str) -> Vec<usize> {
    Gematria::get_gematria_char_counts(word)
}
pub fn get_english_char_counts(_word: &str) -> Vec<usize> {
    println!("Function get_english_char_counts() is open to definition.");
    vec![0]
}
pub fn get_mixed_char_counts(_word: &str) -> Vec<usize> {
    println!("Function get_mixed_char_counts() is open to definition.");
    vec![0]
}

// --- Characters ---
pub fn get_gematria_char(word: &str) -> Option<char> {
    word.chars().next()
}
pub fn get_hebrew_char(word: &str) -> Option<char> {
    word.chars().next()
}
pub fn get_english_char(_word: &str) -> Option<char> {
    println!("Function get_english_char() is open to definition.");
    None
}
pub fn get_mixed_char(_word: &str) -> Option<char> {
    println!("Function get_mixed_char() is open to definition.");
    None
}

pub fn get_gematria_characters(word: &str) -> Vec<char> {
    Gematria::extract_gematria_chars(word)
}
pub fn get_hebrew_characters(word: &str) -> Vec<char> {
    Gematria::extract_gematria_chars(word)
}
pub fn get_english_characters(_word: &str) -> Vec<char> {
    println!("Function get_english_characters() is open to definition.");
    vec![]
}
pub fn get_mixed_characters(_word: &str) -> Vec<char> {
    println!("Function get_mixed_characters() is open to definition.");
    vec![]
}

// --- Character Values ---
pub fn get_gematria_character_values(word: &str) -> Vec<u16> {
    Gematria::get_gematria_values(word)
}
pub fn get_hebrew_character_values(word: &str) -> Vec<u16> {
    Gematria::get_gematria_values(word)
}
pub fn get_english_character_values(_word: &str) -> Vec<u16> {
    println!("Function get_english_character_values() is open to definition.");
    vec![]
}
pub fn get_mixed_character_values(_word: &str) -> Vec<u16> {
    println!("Function get_mixed_character_values() is open to definition.");
    vec![]
}

pub fn get_gematria_character_value(word: &str) -> u16 {
    Gematria::calculate(word)
}
pub fn get_hebrew_character_value(word: &str) -> u16 {
    Gematria::calculate(word)
}
pub fn get_english_character_value(_word: &str) -> u16 {
    println!("Function get_english_character_value() is open to definition.");
    0
}
pub fn get_mixed_character_value(_word: &str) -> u16 {
    println!("Function get_mixed_character_value() is open to definition.");
    0
}

pub fn get_gematria_character_values_sum(word: &str) -> u16 {
    Gematria::calculate(word)
}
pub fn get_hebrew_character_values_sum(word: &str) -> u16 {
    Gematria::calculate(word)
}
pub fn get_english_character_values_sum(_word: &str) -> u16 {
    println!("Function get_english_character_values_sum() is open to definition.");
    0
}
pub fn get_mixed_character_values_sum(_word: &str) -> u16 {
    println!("Function get_mixed_character_values_sum() is open to definition.");
    0
}

pub fn get_gematria_character_value_sum(word: &str) -> u16 {
    Gematria::calculate(word)
}
pub fn get_hebrew_character_value_sum(word: &str) -> u16 {
    Gematria::calculate(word)
}
pub fn get_english_character_value_sum(_word: &str) -> u16 {
    println!("Function get_english_character_value_sum() is open to definition.");
    0
}
pub fn get_mixed_character_value_sum(_word: &str) -> u16 {
    println!("Function get_mixed_character_value_sum() is open to definition.");
    0
}

// --- Totals ---
pub fn gematria_characters(word: &str) -> Vec<char> {
    Gematria::extract_gematria_chars(word)
}
pub fn hebrew_characters(word: &str) -> Vec<char> {
    Gematria::extract_gematria_chars(word)
}
pub fn english_characters(_word: &str) -> Vec<char> {
    println!("Function english_characters() is open to definition.");
    vec![]
}
pub fn mixed_characters(_word: &str) -> Vec<char> {
    println!("Function mixed_characters() is open to definition.");
    vec![]
}

pub fn gematria_values(word: &str) -> Vec<u16> {
    Gematria::get_gematria_values(word)
}
pub fn hebrew_values(word: &str) -> Vec<u16> {
    Gematria::get_gematria_values(word)
}
pub fn english_values(_word: &str) -> Vec<u16> {
    println!("Function english_values() is open to definition.");
    vec![]
}
pub fn mixed_values(_word: &str) -> Vec<u16> {
    println!("Function mixed_values() is open to definition.");
    vec![]
}

pub fn gematria_value(word: &str) -> u16 {
    Gematria::calculate(word)
}
pub fn hebrew_value(word: &str) -> u16 {
    Gematria::calculate(word)
}
pub fn english_value(_word: &str) -> u16 {
    println!("Function english_value() is open to definition.");
    0
}
pub fn mixed_value(_word: &str) -> u16 {
    println!("Function mixed_value() is open to definition.");
    0
}

pub fn gematria_sum(word: &str) -> u16 {
    Gematria::calculate(word)
}
pub fn hebrew_sum(word: &str) -> u16 {
    Gematria::calculate(word)
}
pub fn english_sum(_word: &str) -> u16 {
    println!("Function english_sum() is open to definition.");
    0
}
pub fn mixed_sum(_word: &str) -> u16 {
    println!("Function mixed_sum() is open to definition.");
    0
}

pub fn gematria_total(word: &str) -> u16 {
    Gematria::calculate(word)
}
pub fn hebrew_total(word: &str) -> u16 {
    Gematria::calculate(word)
}
pub fn english_total(_word: &str) -> u16 {
    println!("Function english_total() is open to definition.");
    0
}
pub fn mixed_total(_word: &str) -> u16 {
    println!("Function mixed_total() is open to definition.");
    0
}