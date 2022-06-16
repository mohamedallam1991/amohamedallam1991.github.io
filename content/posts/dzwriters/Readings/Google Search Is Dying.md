---
creation date: 2022-03-30 16:38
modification date: Wednesday 30th March 2022 16:38:05
---
#readings/toread 
> [!info]
> toread => reading => read

Suggested By [[Fouad Djebbar]]

Link https://dkb.io/post/google-search-is-dying

# # Google Search Is Dying
_There is good discussion on this article on [Hacker News](https://news.ycombinator.com/item?id=30347719) and [Reddit](https://www.reddit.com/r/technology/comments/st9ri1/google_search_is_dying/)_

Reddit is currently the most popular search engine. The only people who don’t know that are the team at Reddit, who can’t be bothered to build a decent search interface. So instead we resort to using Google, and appending the word “reddit” to the end of our queries.

Paul Graham thinks this image means Reddit as a social media site “still hasn’t peaked”. What it actually means is that the amount of people using Reddit as a search engine is growing.

![reddit google graph](https://dkb.io/posts/google-search-is-dying/paul-min.png)

Why are people searching Reddit specifically? The short answer is that Google search results are clearly dying. The long answer is that most of the web has become too inauthentic to trust.

## How do we know Google is dying?

If you’ve tried to search for a recipe or product review recently, I don’t need to tell you that Google search results have gone to shit. You would have already noticed that the first few non-ad results are SEO optimized sites filled with affiliate links and ads.

Google still gives decent results for many other categories, especially when it comes to factual information. You might think that Google results are pretty good for you, and you have no idea what I’m talking about.

What you don’t realize is that you’ve been self-censoring yourself from searching most of the things you would have wanted to search. You already know subconsciously that Google isn’t going to return a good result.

I’m far from the only one who thinks Google is dying:

[Daniel Gross](https://dcgross.com/a-new-google)

> In 2000, Google got popular because hackers realized it was better than Lycos or Excite. This effect is happening again. Early adopters aren’t using Google anymore.

[Ask HN: Has Google search become quantitatively worse?](https://news.ycombinator.com/item?id=29392702)

> The results keep getting "refined" so as to suit the popular 80% of queries, while getting much worse for any technical or obscure queries. Forced synonyms and "people also searched for" are typically useless and almost infuriating. Once you get off the first or second page, the results get even worse-- with pages entirely unrelated to the query (e.g. not even containing the searched phrases). They are probably testing/already implemented some sort of multi armed bandit type optimization like on Youtube's search results where they just show any popular pages (ignoring relevancy) to see if they yield a click.

[Michael Seibel](https://twitter.com/mwseibel/status/1477701120319361026):

> A recent small medical issue has highlighted how much someone needs to disrupt Google Search. Google is no longer producing high quality search results in a significant number of important categories.

> Health, product reviews, recipes are three categories I searched today where top results featured clickbait sites riddled with crappy ads. I’m sure there are many more.

[Paul Graham](https://twitter.com/paulg/status/1477760548787920901)

> This may not just be a problem with Google but possibly also the recipe for beating Google. A startup usually has to start with a niche market. Why not try writing a search engine specifically for some category dominated by SEO spam?

## Why is Google dying?

### Ads

It is obvious that serving ads creates misaligned incentives for search engines. The founders of Google pointed this out themselves when they were just getting started.

[Sergey Brin and Lawrence Page (1998)](http://infolab.stanford.edu/~backrub/google.html)

> “Currently, the predominant business model for commercial search engines is advertising. The goals of the advertising business model do not always correspond to providing quality search to users…we expect that advertising funded search engines will be inherently biased towards the advertisers and away from the needs of the consumers…Furthermore, advertising income often provides an incentive to provide poor quality search results.”

Unfortunately, these thoughts on the failings of ad-based search engines read like an instruction manual for what Google did next.

They’ve dialed it up to the max recently to squeeze out every last cent before their inevitable collapse.

![google ads](https://dkb.io/posts/google-search-is-dying/gads-min.png)

### SEO

There are tons of people whose sole job is to game their way to the top of Google, so it shouldn’t be surprising when search results deteriorate in quality. To be fair, this would probably be an issue with any search engine, but you’d expect Google to be able to come up with a less gameable algorithm.

Here’s a [fun story](https://alexskra.com/blog/the-mermaid-is-taking-over-google-search-in-norway/) about how one website gamed their way to the top of Google in Norway.

### AI

Google increasingly does not give you the results for what you typed in. It tries to be “smart” and figure out what you “really meant”, in addition to personalizing things for you. If you really meant exactly what you typed, then all bets are off.

Even the exact match query operator (“ ”) [doesn’t give exact matches anymore](https://news.ycombinator.com/item?id=27052634), which is quite bizarre.

## Why are people appending “reddit” to their queries?

There’s a fun conspiracy theory that popped up recently called the [Dead Internet Theory](https://www.theatlantic.com/technology/archive/2021/08/dead-internet-theory-wrong-but-feels-true/619937/). The claim is basically that most of the internet is bots. There aren’t real people here anymore.

[IlluminatiPirate](https://forum.agoraroad.com/index.php?threads/dead-internet-theory-most-of-the-internet-is-fake.3011/):

> TLDR: Large proportions of the supposedly human-produced content on the internet are actually generated by artificial intelligence networks in conjunction with paid secret media influencers in order to manufacture consumers for an increasing range of newly-normalised cultural products.

This isn’t true (yet), but it reflects some general sense that the authentic web is gone. The SEO marketers gaming their way to the top of every Google search result might as well be robots. Everything is commercialized. Someone’s always trying to sell you something. Whether they’re a bot or human, they are decidedly fake.

So how can we regain authenticity? What if you want to know what a genuine real life human being thinks about the latest Lenovo laptop?

You append “reddit" to your query (or hacker news, or stack overflow, or some other community you trust).

Google is dead.

Long live Google + “site:reddit.com”.

_If you are interested in more thoughts and ideas on search and organizing information, you may want to follow me on twitter [@dkb868](https://twitter.com/dkb868)._

## Appendix 1: response from Google.

### Google claims the exact matching feature is merely unintuitive, not broken

[Danny Sullivan (Google's public Search Liaison)](https://twitter.com/dannysullivan/status/1493702054673485826):

> I work for Google Search, passed your feedback along, thanks. You said in the post that quotes don't give exact matches. They really do. Honest. Put a word or phrase in quotes, that's what we'll match. If anyone has an example where they feel it doesn't, please let me know...

> Here's why people often think quoting with Google doesn't work when it really does (I've looked a huge number of these reports).
> 
> 1.  We match ALT text
> 2.  We match text not readily visible, such as in a menu or small text
> 3.  Page has changed since we indexed it
> 4.  Punctuation...

> Punctuation comes into play if you did a quoted search like "dog cat" and there's text that says "dog, cat" then we'll see that without the punctuation. That doesn't seem a major issue but we're looking at if we could improve there.

### And Google seems to be right so far

Every example of exact matching not working so far can be traced back to issues with punctuation, alt text, etc.

For example, one proposed [failing query](https://news.ycombinator.com/item?id=30355528) was "quotes don't give". But HN user [saalweachter](https://news.ycombinator.com/item?id=30356152) has pointed out that it is a very intricate punctuation problem.

> For instances, on the ["quotes don't give"] example, the first result I get is https://www.goodreads.com/quotes/tag/never-give-up

> If I do a find-in-page for "quotes don't give", I get zero results. Oh no! Perfidy!

> ... but, if you look more closely, you'll find this string waaaaay down at the bottom:

> tags: don-t-give-up, don-t-give-up-on-your-dreams, don-t-give-up-on-yourself, don-t-give-up-quotes, don-t-give-up-the-fight, encouragement, ...

> Thanks to the wonders of tokenization, that "don-t-give-up-quotes, don-t-give-up-the-fight" gives you the string of tokens, "don t give up quotes don t give up the fight", which contains the exact phrase "quotes don t give", which is the tokenization of the phrase "quotes don't give".

[Danny Sullivan (Google's public Search Liaison)](https://news.ycombinator.com/item?id=30356382):

> And...as noted in another reply below, in the first result, if you look at the cached page that shows the ENTIRE page that we indexed (rather than the paginated version you land on), there's this text:

> quotes, don-t-give-up-the-fight

> with when you remove the punctation, is the match:

> quotes dont give

> And I get that this can be frustrating, that we don't consider punctation in a quoted search. That's not a new change, however. It's been that way for ages. But as I also said, it's something we might revisit.

## Appendix 2: Google just had record profits, you are obviously wrong, and Google isn't dying.

I never said that Google wasn't making money. In fact, if Google really is squeezing every last cent out of ads without regard to search quality, I would expect their revenue to be at an all time high.

I am saying that the quality of search results are declining. This may eventually lead to a decrease in revenue, but has not yet.

## Appendix 3: Seriously, what are you talking about? My search results are perfect.

If you think your search results are perfect (without appending reddit), then you're probably right. If every single person agreed that Google search results were trash, then Google would already be bankrupt.

Perhaps it is more likely that 80% of people think Google is good enough, and 20% think Google sucks.

I do suspect that the 20% will be growing in number though.

## Appendix 4: *Yawn*, this is the 87th time someone has claimed that Google search is dying in the last 20 years. This is a big meme in the SEO world.

_"The reports of my death are greatly exaggerated" - Google, probably_

You're right, there's been a new article bashing Google every few months for the last 20 years straight. It's probably nothing.

Still, it is a bit interesting that this short and simple post is now one of the most upvoted things of all time on Hacker News. There must be a lot of people who resonate with it this time around.

Hard to tell if something significant has changed.

## Appendix 5: Random redditor explains it succinctly

[u/a_latvian_potato](https://www.reddit.com/r/technology/comments/st9ri1/comment/hx3zubc/):

> I think I understand what this article is trying to say. It's not saying that Google's search technology is worse or that people don't use Google to search. It's saying that people trust less of the results Google shows compared to seeing discussions of it on Reddit.

> For instance, if I'm looking to see reviews of the Honda Civic 2022 or whatever, I actually do find myself typing "Honda Civic review reddit" instead of "Honda Civic review". This is because I want to see what real people and enthusiasts (on r/cars or whatever) are talking about the car, rather than the top results at Google which are basically just paid reviews advertising the car anyway.

> Even though I kinda know people in Reddit are just as capable of spouting BS that are completely wrong, I find the discussions more authentic anyway than the corporate speak the "big websites" have on their articles that Google shows me.

## Appendix 6: A fun comic by [@zenacomics](https://twitter.com/zenacomics/)

![google comic](https://dkb.io/posts/google-search-is-dying/googlecomic.jpeg)

## Appendix 7: More thoughts on organizing information on the internet

If you want some more in-depth thoughts on this subject, you should check out [this post I wrote a year ago](https://dkb.io/post/organize-the-world-information) about all the different ways we could organize information usefully on the internet.


