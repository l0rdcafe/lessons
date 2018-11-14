# What is a **bit**?

A **bit** has one of two states; `0` or `1` and help store information on computers.

## What is positional notation?

Positional notation is a number system with a certain base, decimal has a base 10 while octal has base 8. Moreover, binary is base 2, hexadecimal is base 16.

### How do computers represent _numbers_ as **bits**?

Computers represent _numbers_ as **bits** by converting the decimal positional notation from decimal to binary aka base 10 to base 2. Representing _numbers_ as **bits** for integers is done in two forms; signed integers and unsigned integers, the former can represent both positive and negative integers while the latter can represent one or the other usually positive. Negative integers have a leading sign bit of `1`. Another way to represent negative integers is by flipping the **bits** to its one's complement value, `3 === 00000011` and `-3 === 11111100`, two's complement works like one's complement but for the other way around (from negative to positive) after flipping the **bits** you add `1`. Rational numbers otherwise known as floats, represent ratios and have infinite rational numbers in a given range.

## How do computers represent _text_ as **bits**?

Computers represent _text_ as **bits** by representing _text_ as _numbers_ then converting them to **bits**.

### What is a **character set**?

A **character set** is a mapping of characters to numbers. The most common **character set** is the **ASCII** or American Standard Code for Information Interchange, which contains 128 characters including digits from 0-9, punctuation and both uppercase and lowercase english characters as well as whitespace characters like space, horizontal tab, vertical tab, linefeed and carriage return.

#### What is a _character encoding_?

A _character encoding_ is a scheme for representing characters as **bits**. **ASCII** was good enough for a long time but its applications fit the english language. **Unicode** then became the world-standard **character set** and _encoding_.
