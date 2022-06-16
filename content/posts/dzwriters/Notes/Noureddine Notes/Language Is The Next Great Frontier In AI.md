#article/toread


Source : https://www.forbes.com/sites/robtoews/2022/02/13/language-is-the-next-great-frontier-in-ai/?sh=66bb30cf5c50
author: [[Rob Toews]]

Language is the cornerstone of human intelligence.

The emergence of language was the most important intellectual development in our species’ history. It is through language that we formulate thoughts and communicate them to one another. Language enables us to reason abstractly, to develop complex ideas about what the world is and could be, and to build on these ideas across generations and geographies. Almost nothing about modern civilization would be possible without language.

Building machines that can understand language has thus been a central goal of the field of artificial intelligence dating back to its earliest days.

It has proven maddeningly elusive.

This is because mastering language is what is known as an [“AI-complete” problem](https://en.wikipedia.org/wiki/AI-complete "https://en.wikipedia.org/wiki/AI-complete"): that is, an AI that can truly understand language the way a human can would by implication be capable of any other human-level intellectual activity. Put simply, to solve language is to solve AI.

This profound and subtle insight is at the heart of the [“Turing test,”](https://en.wikipedia.org/wiki/Turing_test "https://en.wikipedia.org/wiki/Turing_test") introduced by AI pioneer Alan Turing in [a groundbreaking 1950 paper](https://phil415.pbworks.com/f/TuringComputing.pdf "https://phil415.pbworks.com/f/TuringComputing.pdf"). Though often critiqued or misunderstood, the Turing test captures a [fundamental reality](https://www.kurzweilai.net/a-wager-on-the-turing-test-why-i-think-i-will-win "https://www.kurzweilai.net/a-wager-on-the-turing-test-why-i-think-i-will-win") about language and intelligence; as it approaches its 75th birthday, it remains as relevant as it was when Turing first conceived it.

MORE FROMFORBES ADVISOR


Humanity has yet to build a machine intelligence with human-level mastery of language. (In other words, no machine intelligence has yet passed the Turing test.) But over the past few years researchers have achieved startling, game-changing breakthroughs in language AI, also called natural language processing (NLP).

The technology is now at a critical inflection point, poised to make the leap from academic research to widespread real-world adoption. In the process, broad swaths of the business world and our daily lives will be transformed. Given language’s ubiquity, few areas of technology will have a more far-reaching impact on society in the years ahead.
  

### Transformers: A Once-In-A-Generation Breakthrough

The most powerful way to illustrate the capabilities of today’s cutting-edge language AI is to start with a few concrete examples.

Today’s AI [can correctly answer](https://twitter.com/QasimMunye/status/1278750809094750211?s=20&t=GN6OnHrn97_Myzyf9nCuRw "https://twitter.com/QasimMunye/status/1278750809094750211?s=20&t=GN6OnHrn97_Myzyf9nCuRw") complex medical queries—and explain the underlying biological mechanisms at play. It [can craft](https://twitter.com/zebulgar/status/1283927560435326976?s=20&t=Z27yBOy0MYNHEV6zjExs1Q "https://twitter.com/zebulgar/status/1283927560435326976?s=20&t=Z27yBOy0MYNHEV6zjExs1Q") nuanced memos about how to run effective board meetings. It [can write](https://maraoz.com/2020/07/18/openai-gpt3/ "https://maraoz.com/2020/07/18/openai-gpt3/") articles analyzing its own capabilities and limitations, while convincingly pretending to be a human observer. It [can produce](https://www.gwern.net/GPT-3 "https://www.gwern.net/GPT-3") original, sometimes beautiful, poetry and literature.

(It is worth taking a few moments to inspect these examples yourself.)

What is behind these astonishing new AI abilities, which just five years ago would have been inconceivable?

In short: the invention of the transformer, a new neural network architecture that has unleashed vast new possibilities in AI.

A group of Google researchers introduced the transformer in late 2017 in a [now-classic research paper](https://arxiv.org/pdf/1706.03762.pdf "https://arxiv.org/pdf/1706.03762.pdf").

Before transformers, the state of the art in NLP—for instance, LSTMs and the widely-used [Seq2Seq architecture](https://arxiv.org/pdf/1409.3215.pdf "https://arxiv.org/pdf/1409.3215.pdf")—was based on recurrent neural networks. By definition, recurrent neural networks process data sequentially—that is, one word at a time, in the order that the words appear.

Transformers’ great innovation is to make language processing _parallelized_, meaning that all the tokens in a given body of text are analyzed at the same time rather than in sequence. In order to support this parallelization, transformers rely on an AI mechanism known as attention. Attention enables a model to consider the relationships between words, even if they are far apart in a text, and to determine which words and phrases in a passage are most important to “pay attention to.”

Parallelization also makes transformers vastly more computationally efficient than RNNs, meaning that they can be trained on larger datasets and built with more parameters. One defining characteristic of today’s transformer models is their massive size.

A flurry of innovation followed in the wake of the original transformer paper as the world’s leading AI researchers built upon this foundational breakthrough.

The publication of the landmark transformer model [BERT](https://arxiv.org/pdf/1810.04805.pdf "https://arxiv.org/pdf/1810.04805.pdf") came in 2018. Created at Google, BERT’s big conceptual advance is its bidirectional structure (the B in BERT stands for “bidirectional”). The model “looks in both directions” as it analyzes a given word, considering both the words that come before and the words that come after, rather than working unidirectionally from left to right. This additional context allows for richer, more nuanced language modeling.

BERT remains one of the most important transformer-based models in use, frequently treated as a reference against which newer models are compared. Much subsequent research on transformers—for instance, Facebook’s influential [RoBERTa model](https://arxiv.org/pdf/1907.11692.pdf "https://arxiv.org/pdf/1907.11692.pdf") (2019)—is based on refining BERT.

Google’s entire search engine today is [powered by BERT](https://blog.google/products/search/search-language-understanding-bert/ "https://blog.google/products/search/search-language-understanding-bert/"), one of the most far-reaching examples of transformers’ real-world impact.

Another core vein of research in the world of transformers is OpenAI’s family of GPT models. OpenAI published the [original GPT](https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf "https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf") in June 2018, [GPT-2](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf "https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf") in February 2019, and [GPT-3](https://arxiv.org/pdf/2005.14165.pdf "https://arxiv.org/pdf/2005.14165.pdf") in May 2020. Popular [open-source versions](https://www.eleuther.ai/ "https://www.eleuther.ai/") of these models, like GPT-J and GPT-Neo, have followed.

As the “G” in their names indicates, the GPT models are generative: they generate original text output in response to the text input they are fed. This is an important distinction between the GPT class of models and the BERT class of models. BERT, unlike GPT, does not generate new text but instead analyzes existing text (think of activities like search, classification, or sentiment analysis).

GPT’s generative capabilities make these models particularly attention-grabbing, since writing appears to be a creative act and the output can be astonishingly human-like. Text generation is sometimes referred to as “NLP’s party trick.” (All four of the examples linked to above are text generation examples from GPT-3.)

Perhaps the most noteworthy element of the GPT architecture is its sheer size. OpenAI has been intentional and transparent about its strategy to pursue more advanced language AI capabilities through raw scale above all else: more compute, larger training data corpora, larger models.

With 1.5 billion parameters, GPT-2 was the largest model ever built at the time of its release. Published less than a year later, GPT-3 was two orders of magnitude larger: a whopping 175 billion parameters. [Rumors have circulated](https://www.wired.com/story/cerebras-chip-cluster-neural-networks-ai/ "https://www.wired.com/story/cerebras-chip-cluster-neural-networks-ai/") that GPT-4 will contain on the order of _100 trillion parameters_ (perhaps not coincidentally, roughly equivalent to [the number of synapses](https://www.scientificamerican.com/article/100-trillion-connections/ "https://www.scientificamerican.com/article/100-trillion-connections/") in the human brain). As a point of comparison, the largest BERT model had 340 million parameters.

As with any machine learning effort today, the performance of these models depends above all on the data on which they are trained.

Today’s transformer-based models learn language by ingesting essentially the entire internet. BERT was fed all of Wikipedia (along with the digitized texts of thousands of unpublished books). RoBERTa improved upon BERT by training on even larger volumes of text from the internet. GPT-3’s training dataset was larger still, consisting of half a trillion language tokens. Thus, these models’ linguistic outputs and behaviors can ultimately be traced to the statistical patterns in all the text that humans have previously published online.

The reason such large training datasets are possible is that transformers use self-supervised learning, meaning that they learn from unlabeled data. This is a crucial difference between today’s cutting-edge language AI models and the previous generation of NLP models, which had to be trained with labeled data. Today’s self-supervised models can train on far larger datasets than was ever previously possible: after all, there is more unlabeled text data than labeled text data in the world by many orders of magnitude.

Some observers point to self-supervised learning, and the vastly larger training datasets that this technique unlocks, as the single most important driver of NLP’s dramatic performance gains in recent years, more so than any other feature of the transformer architecture.

  

### Foundation Models

Training models on massive datasets with millions or billions of parameters requires vast computational resources and engineering know-how. This makes large language models prohibitively costly and difficult to build. GPT-3, for example, required several thousand petaflop/second-days to train—a staggering amount of computational resources.

Because very few organizations in the world have the resources and talent to build large language models from scratch, almost all cutting-edge NLP models today are adapted from a small handful of base models: e.g., BERT, RoBERTa, GPT-2, BART. Almost without exception, these models come from the world’s largest tech companies: Google, Facebook, OpenAI (which is bankrolled by Microsoft), Nvidia.

Without anyone quite planning for it, this has resulted in an entirely new paradigm for NLP technology development—one that will have profound implications for the nascent AI economy.

This paradigm can be thought of in two basic phases: pre-training and fine-tuning.

In the first phase, a tech giant creates and open-sources a large language model: for instance, Google’s BERT or Facebook’s RoBERTa.

Unlike in previous generations of NLP, in which models had to be built for individual language tasks, these massive models are not specialized for any particular activity. They have powerful generalized language capabilities across functions and topic areas. Out of the box, they perform well at the full gamut of activities that comprise linguistic competence: language classification, language translation, search, question answering, summarization, text generation, conversation. Each of these activities on its own presents compelling technological and economic opportunities.

Because they can be adapted to any number of specific end uses, these base models are referred to as “pre-trained.”

In the second phase, downstream users—young startups, academic researchers, anyone else who wants to build an NLP model—take these pre-trained models and refine them with a small amount of additional training data in order to optimize them for their own specific use case or market. This step is referred to as “fine-tuning.”

“Today’s pre-trained models are incredibly powerful, and even more importantly, they are publicly available,” said Yinhan Liu, lead author on Facebook’s RoBERTa work and now cofounder/CTO of healthcare NLP startup BirchAI. “For those teams that have the know-how to operationalize transformers, the question becomes: what is the most important or impactful use case to which I can apply this technology?”

Under this “pre-train then fine-tune” paradigm, the heavy lifting is done upfront with the creation of the pre-trained model. Even after fine-tuning, the end model’s behavior remains largely dictated by the pre-trained model’s parameters.

This makes these pre-trained models incredibly influential. So influential, in fact, that Stanford University has recently coined a new name for them, “foundation models”, and launched an entire academic program devoted to better understanding them: the [Center for Research on Foundation Models](https://crfm.stanford.edu/ "https://crfm.stanford.edu/") (CRFM). The Stanford team believes that foundation models, and the small group of tech giants that have the resources to produce them, will exert outsize influence on the future behavior of artificial intelligence around the world.

As the researchers [put it](https://arxiv.org/pdf/2108.07258.pdf "https://arxiv.org/pdf/2108.07258.pdf"): “Foundation models have led to an unprecedented level of homogenization: Almost all state-of-the-art NLP models are now adapted from one of a few foundation models. While this homogenization produces extremely high leverage (any improvements in the foundation models can lead to immediate benefits across all of NLP), it is also a liability; all AI systems might inherit the same problematic biases of a few foundation models.”

This Stanford effort is drawing attention to a massive looming problem for large language models: social bias.

The source of social bias in AI models is straightforward to summarize but insidiously difficult to root out. Because large language models (or foundation models, to use the new branding) learn language by ingesting what humans have written online, they inevitably inherit the prejudices, false assumptions and harmful beliefs of their imperfect human progenitors. Just imagine all the fringe subreddits and bigoted blogs that must have been included in GPT-3’s vast training data corpus.

The problem has been [extensively documented](https://arxiv.org/pdf/2106.13219.pdf "https://arxiv.org/pdf/2106.13219.pdf"): today’s most prominent foundation models all exhibit racist, sexist, xenophobic, and other antisocial tendencies. This issue will only grow more acute as foundation models become increasingly influential in society. Some observers believe that AI bias will eventually become as prominent of an issue for consumers, companies and governments as digital threats like data privacy or cybersecurity that have come before it—threats that were also not fully appreciated at first, because the breakneck pace of technological change outstripped society’s ability to properly adapt to it.

There is no silver-bullet solution to the challenge of AI bias and toxicity. But as the problem becomes more widely recognized, a number of mitigation strategies are being pursued.

Last month, OpenAI [announced](https://openai.com/blog/instruction-following/ "https://openai.com/blog/instruction-following/") that it had developed a new version of GPT-3 that is “safer, more helpful, and more aligned” with human values. The company used a technique known as [reinforcement learning from human feedback](https://cdn.openai.com/papers/Training_language_models_to_follow_instructions_with_human_feedback.pdf "https://cdn.openai.com/papers/Training_language_models_to_follow_instructions_with_human_feedback.pdf") to fine-tune its models to be less biased and more truthful than the original GPT-3. This new version, named InstructGPT, is now the default language model that OpenAI makes available to customers.

Historically, Alphabet’s DeepMind has been an outlier among the world’s most advanced AI research organizations for _not_ making language AI a major focus area. This changed at the end of 2021, with DeepMind [announcing](https://deepmind.com/blog/article/language-modelling-at-scale "https://deepmind.com/blog/article/language-modelling-at-scale") a collection of important work on large language models.

Of the three NLP papers that DeepMind published, one is devoted entirely to the ethical and social risks of language AI. The paper [proposes](https://arxiv.org/pdf/2112.04359.pdf "https://arxiv.org/pdf/2112.04359.pdf") a comprehensive taxonomy of 6 thematic areas and 21 specific risks that language models pose, including discrimination, exclusion, toxicity and misinformation. DeepMind pledged to make these risks a central focus of its NLP research going forward to help ensure that it is pursuing innovation in language AI responsibly.

The fact that this dimension of language AI research—until recently, treated as an afterthought or ignored altogether by most of the world’s NLP researchers—featured so centrally in DeepMind’s recent foray into language AI may be a signal of the field’s shifting priorities moving forward.

Increased regulatory focus on the harms of bias and toxicity in AI models will only accelerate this shift. And make no mistake: regulatory action on this front is a matter of when, not if.

  

### Beyond Natural Language

Interestingly, perhaps the most creative use cases for NLP today don’t involve natural language at all. In particular, today’s cutting-edge language AI technology is powering remarkable breakthroughs in two other domains: coding and biology.

Whether it’s Python, Ruby, or Java, computer programming happens via languages. Just like natural languages like English or Swahili, programming languages are symbolically represented, follow regular rules, and have a robust internal logic. The audience just happens to be software compilers rather than other humans.

It therefore makes sense that the same powerful new technologies that have given AI incredible fluency in natural language can likewise be applied to programming languages, with similar results.

Last summer OpenAI [announced Codex](https://arxiv.org/pdf/2107.03374.pdf "https://arxiv.org/pdf/2107.03374.pdf"), a transformer-based model that can write computer code astonishingly well. In parallel, GitHub (which is allied with OpenAI through its parent company Microsoft) launched a productized version of Codex [named Copilot](https://github.blog/2021-06-29-introducing-github-copilot-ai-pair-programmer/ "https://github.blog/2021-06-29-introducing-github-copilot-ai-pair-programmer/").

To develop Codex, OpenAI took GPT-3 and fine-tuned it on a massive volume of publicly available written code from GitHub.

Codex’s design is simple: human users give it a plain-English description of a command or function and Codex turns this description into functioning computer code. A user could input into Codex, for instance, “crop this image circularly” or “animate this image horizontally so that it bounces off the left and right walls”—and Codex can produce a snippet of code to implement those actions. (These exact examples can be examined on [OpenAI’s website](https://openai.com/blog/openai-codex/#spacegame "https://openai.com/blog/openai-codex/#spacegame").) Codex is most capable in Python, but it is proficient in over a dozen programming languages.

Then, just two weeks ago, DeepMind further advanced the frontiers of AI coding with its [publication of AlphaCode](https://www.deepmind.com/blog/article/Competitive-programming-with-AlphaCode "https://www.deepmind.com/blog/article/Competitive-programming-with-AlphaCode").

AlphaCode is an AI system that can compete at a human level in programming competitions. In these competitions, which attract hundreds of thousands of participants each year, contestants receive a lengthy problem statement in English and must construct a complete computer program that solves it. Example problems include devising strategies for a custom board game or solving an arithmetic-based brain teaser.

While OpenAI’s Codex can produce short snippets of code in response to concrete descriptions, DeepMind’s AlphaCode goes much further. It begins to approach the full complexity of real-world programming: assessing an abstract problem without a clear solution, devising a structured approach to solving it, and then executing on that approach with up to hundreds of lines of code. AlphaCode almost seems to display that ever-elusive attribute in AI, high-level reasoning.

As DeepMind’s AlphaCode team [wrote](https://www.deepmind.com/blog/article/Competitive-programming-with-AlphaCode "https://www.deepmind.com/blog/article/Competitive-programming-with-AlphaCode"): “Creating solutions to unforeseen problems is second nature in human intelligence—a result of critical thinking informed by experience. For artificial intelligence to help humanity, our systems need to be able to develop problem-solving capabilities. AlphaCode solves new problems in programming competitions that require a combination of critical thinking, logic, algorithms, coding, and natural language understanding.”

Another “language” in which today’s cutting-edge NLP has begun to generate remarkable insights is biology, from genomics to proteins.

Genomics is well-suited to the application of large language models because an individual’s entire genetic endowment is encoded in a simple four-letter alphabet: A (for adenine), C (for cytosine), G (for guanine), and T (for thymine). Every human’s DNA is defined by a string of billions of A’s, C’s, G’s and T’s (known as nucleotides) in a particular order.

In many respects DNA functions like a language, with its nucleotide sequences exhibiting regular patterns that resemble a kind of vocabulary, grammar, and semantics. What does this language say? It defines much about who we are, from our height to our eye color to our risk of heart disease or substance abuse.

Large language models are now making rapid progress in deciphering the language of DNA, in particular its “noncoding” regions. These noncoding regions do not contain genes but rather _control_ genes: they regulate how much, when, and where given genes are expressed, giving them a central role in the maintenance of life. Noncoding regions comprise 98% of our total DNA but until now have remained poorly understood.

A few months ago, DeepMind [introduced](https://deepmind.com/blog/article/enformer "https://deepmind.com/blog/article/enformer") a new transformer-based architecture that can predict gene expression based on DNA sequence with unprecedented accuracy. It does so by considering interactions between genes and noncoding DNA sequences at much greater distances than was ever before possible. A team at Harvard completed [work](https://towardsdatascience.com/bringing-bert-to-the-field-how-to-predict-gene-expression-from-corn-dna-9287af91fcf8 "https://towardsdatascience.com/bringing-bert-to-the-field-how-to-predict-gene-expression-from-corn-dna-9287af91fcf8") along similar lines to better understand gene expression in corn (fittingly naming their model “CornBERT”).

Another subfield of biology that represents fertile ground for language AI is [the study of proteins](https://www.sciencedirect.com/science/article/pii/S2001037021000945#! "https://www.sciencedirect.com/science/article/pii/S2001037021000945#!"). Proteins are strings of building blocks known as amino acids, linked together in a particular order. There are 20 amino acids in total. Thus, for all their complexity, proteins can be treated as tokenized strings—wherein each amino acid, like each word in a natural language, is a token—and analyzed accordingly.

As one example, an AI research team from Salesforce [recently built](https://blog.salesforceairesearch.com/progen/ "https://blog.salesforceairesearch.com/progen/") an NLP model that “learns the language of proteins” and can generate plausible protein sequences that don’t exist in nature with prespecified characteristics. The potential applications of this type of controllable protein synthesis are tantalizing.

These efforts are just the beginning. In the months and years ahead, language AI will make profound contributions to our understanding of how life itself works.

  

### Conclusion

Language is at the heart of human intelligence. It therefore is and must be at the heart of our efforts to build artificial intelligence. No sophisticated AI can exist without mastery of language.

Today, the field of language AI is at an exhilarating inflection point, on the cusp of transforming industries and spawning new multi-billion-dollar companies. At the same time, it is fraught with societal dangers like bias and toxicity that are only now starting to get the attention they deserve.

This article explored the big-picture developments and trends shaping the world of language AI today. In a [followup article](https://www.forbes.com/sites/robtoews/2022/03/27/a-wave-of-billion-dollar-language-ai-startups-is-coming/?sh=1e8aa7302b14 "https://www.forbes.com/sites/robtoews/2022/03/27/a-wave-of-billion-dollar-language-ai-startups-is-coming/?sh=1e8aa7302b14"), we canvass today’s most exciting NLP startups. A growing group of NLP entrepreneurs is applying cutting-edge language AI in creative ways across sectors and use cases, generating massive economic value and profound industry disruption. Few startup categories hold more promise in the years ahead.