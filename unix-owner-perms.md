# What are file and directory **ownerships**?

Typing `whoami` on the **UNIX command line** prints out the current user name. Locally, **ownership** and _permissions_ go so far, but when dealing with a **UNIX server** where different users have different **ownerships** and _permissions_, they come much more into play. By default, a file created during a user's session will have them as the owner of it.

## What are file and directory _permissions_?

_Permissions_ are in the first column of the output of `ls -la`. The first letter denotes whether it's a file a directory, a file represented by a `-`, a link represented by a `l` and a directory represented by a `d`. The next 9 letters of the _permissions_ encryption includes three main letters, `r` for **read**, `w` for _write_ and `x` for **_execute_**. The first two `r` and `w` _permissions_ allow for **users** who share a group to **read** and _write_ the files/directories, while `x` is for the owner of the file or directory to **_execute_**. Moreover, a different user from a different group also has _permission_ to **read** the file/directory.

### How can you change file **ownership** and _permissions_?

You can change file **ownership** using the `chown` command, an example would be `chown Lord:admin test.txt`. This command changes the user of `test.txt` to `Lord` and its group to `admin`. Moreover, `chown` applies on directories but will change **ownership** and group of said directory minus its contents unless the `chown -R` recursive option runs. You can also change _permissions_ using `chmod` command, `chmod u=rwx,g=rw,o=r test.txt`. This command sets the _permissions_ for first the user, second the group, and third other. That command is too laborious, this one is more streamlined where it adds _permissions_ instead of setting them from scratch. `chmod ug+w test.txt`. Furthermore, _permissions_ set to subtract _permissions_ look like this `chmod o-w test.txt`. You can also change _permissions_ using **octal notation** with `r` represented by `4`, `w` by `2` and `x` by `1`. You add the numbers according to the _permissions_ allowed for `ugo` in that order.

#### What are **user groups**?

**User groups** are groups each with different **ownerships** and _permissions_, as mentioned they come more into play when dealing with a **UNIX server** as locally, you can have either `staff` or `admin` **user groups**. To find out what **user groups** you belong to type `groups` in the command line.

##### What is the **root user**?

The **root user** is a user that can do anything on the system, including reading, writing and executing. Mac disables the **root user** by default.

###### What is `sudo` and what does it do?

`sudo` grants the administrator user on a computer **root user** _permissions_ by substituting to the **root user** and executing the following command. You can substitute to a different user than the **root user** by using `sudo -u user2` command.
