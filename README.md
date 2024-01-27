# Password-Strength-Tester

## Introduction
Password Strength Tester is a password-strength tester based on the [OWASP Guidelines for enforcing secure passwords](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#maximum-password-lengths). 
## Features
This model tests passwords for complexity such as:
* Checking for Uppercase Letters
* Checking Numbers and Special Characters
* Checking if the length is long enough
The model also checks if the password has been breached using the [Pwned Passwords API](https://haveibeenpwned.com/API/v3#PwnedPasswords).
## Improvements
I would like to implement the following features:
* Implement user configuration of complexity.
* Restrict users from using commonly used password phrases.
* Fix text color continuity when checking if the password has been breached.
