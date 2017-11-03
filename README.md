# Drop Dead Simple Online Course

Drop dead simple online course CMS based on Git and Markdown.
Designed specifically for me :)

It's like GitBook, but for online courses.

* [x] Read and render README.md in root folder
* [x] Routing to `week`s
* [x] Read and render README.md in each `week`

## Getting Started

You need to add some 'secrets' in `src/` folder named `src/.env.json` with this kind of data:

```json
{
  "GITHUB_TOKEN": "",
  "BASE_URL" : "https://api.github.com/repos/rizafahmi/dds-courses-content-example"
}
```

## Screens

![layouts](dds-courses.png)
