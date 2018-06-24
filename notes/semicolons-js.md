# Where are **semicolons** allowed?

**Semicolons** denote the end of a statement in **JavaScript**. They appear at the end of a `do while` statement, var statements, expression statements, continue, return, break, throw and debugger statements. A **semicolon** by itself is a valid program as it's interpreted as an empty statement. Lastly, they appear in `for` loops to separate the expressions in a loop.

## Where are **semicolons** omittable?

At some points in the **JavaScript** grammar, **semicolons** may be omittable. The rules for how _ASI_ or automatic semicolon insertion works are as follows; when the program contains a token that is not allowed by the formal **JavaScript** grammar, then JS inserts a semicolon if there is a line break at that point, or the unexpected token was a closing brace. The second rule is at the end of a file, if the program is not parseable, JS inserts a semicolon. Thirdly, when a restricted production contains a line terminator in a place where the grammar contains the annotation `[no LineTerminator here]`, then JS inserts a semicolon. In practice, a semicolon is optional where there is a line break, a closing brace, or the end of the program. Semicolons are not optional between statements on the same line. Moreover, a semicolon is not implied at the end of a line if the first token of the next line is parseable as part of the same statement. The exceptions are `for` loops and empty statements.

### What is the concept of restricted productions?

Restricted productions are those in which a line break cannot appear in a particular position, so if a line break appears there it will prevent the program parsing as expected and might instead parse another way. **JavaScript** has five restricted productions and they are the postfix operators `++` and `--`, `continue`, `break`, `return` and `throw` statements. Indentation doesn't affect parsing **JavaScript**, but line breaks whether present or absent does.

#### How does **JavaScript** chain statements?

According to the first rule of _ASI_, if a token on the next line after a line break is parseable as part of the statement, then the statement continues. Thus, enabling chaining statements. **JavaScript** has five tokens that can appear both at the start of a statement and as extension of some complete statement, and they are `(`, `[`, `/`, `+` and `-`, of these the first two are problematic.
