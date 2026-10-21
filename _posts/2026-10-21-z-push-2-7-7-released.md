---
title: "Z-Push 2.7.7 released"
---

Hello,

We have just released Z-Push **2.7.7**.

Install Z-Push 2.7.7 from the repo Releases (recommended): [Z-Push 2.7.7 release](https://github.com/Z-Hub/Z-Push/releases/tag/2.7.7).

This release contains security fixes and general bug fixes, with no new major features. Everyone running 2.7.6 or earlier is encouraged to upgrade.

**Security fixes**

- CalDAV and CardDAV: request URLs built from server responses are now joined safely, usernames are encoded when building DAV paths, and request headers can no longer be injected through a server-supplied ETag.
- CalDAV and CardDAV: the DAV server's TLS certificate is now verified (see below).
- LDAP: user input is now escaped in the LDAP backend and in the IMAP backend's LDAP sender lookup.
- Error pages now escape the messages they display.
- Smaller fixes to the wincache IPC provider and autodiscover.

**DAV certificate verification**

The CalDAV and CardDAV backends now verify the DAV server's TLS certificate. By default (`DAV_SSL_VERIFY_AUTO` in `config.php`), certificates are checked for every server except one on the same machine (`localhost`, `127.0.0.1` or `[::1]`).

**Check before upgrading:** if your CalDAV or CardDAV server is on another host and uses a self-signed, expired or otherwise invalid certificate, calendar and contact sync will stop after upgrading. Install a valid certificate (recommended), or set `DAV_SSL_VERIFY` to `DAV_SSL_VERIFY_OFF`.

**Other fixes**

- CardDAV contacts without a `.vcf` file extension are no longer missed during sync.
- IMAP messages without a `Date:` header now show the time they were received rather than the sync time.
- A PHP 8 error when a backend passes a non-string value for encoding no longer stops the whole sync.
- A PHP deprecation warning on every request is fixed, along with an nginx configuration simplification and updated documentation links.

Thanks a lot to all Z-Push contributors! Your contributions are highly appreciated. A special thank you to [prasannavl](https://github.com/prasannavl), [mschering](https://github.com/mschering), [iredmail](https://github.com/iredmail), [darealShadow](https://github.com/darealShadow), [cremenescu](https://github.com/cremenescu) and [AlbertoSolaro](https://github.com/AlbertoSolaro), whose fixes are part of this release.

Code changes since Z-Push 2.7.6: [https://github.com/Z-Hub/Z-Push/compare/2.7.6...2.7.7](https://github.com/Z-Hub/Z-Push/compare/2.7.6...2.7.7)

Please share your experiences (positive and negative) and give feedback on the [discussion post](https://github.com/Z-Hub/Z-Push/discussions/223)!

Greetings,<br>
Mat
