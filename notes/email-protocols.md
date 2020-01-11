# How does sending emails work?

A sender workstation is a computer where the mail client runs, or the start point for a sent email. Any sent email comes through an SMTP server, or maybe two or three on occasion also referred to as mail servers or email servers. The email then ends up in email message storage after being sent and delivered. The receiver workstation is the computer that the email ends up being read on.

## What does an SMTP server do?

When sending an email, the email goes to an SMTP server, which then tries to locate the address of another SMTP server through DNS that is responsible for holding messages for the recipient. If both emails are on the same domain, then there would be no need to locate another SMTP server, this is local delivery. The recipient SMTP server checks if the message is spam.

### What is SMTP?

Simple Mail Transfer Protocol is the protocol for sending emails created in 1982. It is a text-only protocol, but nowadays through extensions emails can contain videos, pictures and files.

#### How does an SMTP server perform spam checks?

An SMTP server checks a sender's IP against a real time database, and if it is suspect then it aborts the connection. Second, it checks if the email headers are correct. Then it checks the validity of the return address, and also checks the message for stop words if all previous checks pass.

### What is the difference between IMAP and POP3 email reading protocols?

IMAP and POP3 are protocols for retrieving emails from an email server. POP3 stands for Post Office Protocol 3, it is the simpler of the two protocols because it does one task, which is download the emails in the inbox folder from the mail server to the device. POP3 ignores the drafts, sent, deleted email folders. POP3 also does not synchronize the folders. After the download of an email to a device, it deletes its copy on the server. IMAP stands for Internet Message Access Protocol, it allows you to view your email on the server from multiple devices. The emails are on the server but it caches copies of the emails on all of the devices and synchronizes all the folders and their contents.
