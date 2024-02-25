import { md__raw_ } from '@rappstack/ui--any/md'
import { tb_a_ } from '@rappstack/ui--any/anchor'
import { footnote_list__div_ } from '@rappstack/ui--server--blog/footnote'
import { div_, img_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import {
	bunjs__tb_a_,
	ctx_core__tb_a_,
	electric_universe__tb_a_,
	existence__tb_a_,
	holochain_whitepaper__tb_a_,
	philosophy__tb_a_,
	postgres__tb_a_,
	redis__tb_a_,
	relementjs__tb_a_,
	relysjs__tb_a_,
	rmemo__tb_a_
} from '../anchor/index.js'
import { attribution_dev__sup_ } from '../attribution/index.js'
import { md_layout__doc_html_ } from '../md/index.js'
import dev_svg from '../public/assets/images/dev.svg'
export function about__doc_html_({
	ctx,
}:{
	ctx:request_ctx_T
}) {
	return (
		md_layout__doc_html_({
			ctx,
			title: 'About',
			description: 'Contextual full stack systems developer',
			active_link: 'about',
		}, [
			// @formatter:off
			// language=md
			md__raw_(`
I create full stack software solutions. I created:

* ${ctx_core__tb_a_()}
* ${rmemo__tb_a_()}
* ${relementjs__tb_a_()}
* ${relysjs__tb_a_()}

My current preferred tooling is:

* monorepos
* ${bunjs__tb_a_()}
* ${ctx_core__tb_a_()}
* ${relysjs__tb_a_()}
* ${rmemo__tb_a_()}
* ${relementjs__tb_a_()}
* ${redis__tb_a_()}
* ${postgres__tb_a_()}

With over 20 years of profession development experience, I have been a part of many projects & fantastic teams. See a [portfolio](/portfolio) of some of my work. I'm excited about the latest set of tools, as we have a comprehensive, high-performance, full-stack, isomorphic solution stack. We also have the rise of machine learning & vector databases. Over the last few years, I have worked on libraries to take full advantage of this inevitable outcome.

## Crafting software since 2002 with 💖

Personal systems has been an instrumental tool in working with the chaos of the world. From starting my career during the .com collapse, through consulting gigs with startups, to the ever-changing tech/cultural landscape, I strive to create continuity in work, family, personal meditation, & the panoply of modern life.

## 👊🏼 Skin in the game

I love the collaborative creative energy in startup companies. The team has a goal to make an impact & to reach the next level of funding. Concentrated talent with strong opinions. Unifying process & tooling is necessary for effective collaboration. Pressure to fulfil expectations & metrics drives the engine of creation. A well-oiled machine is beautiful.

Though I seek a better way that aligns with my personal systems to use continuity to drive the creative process. My belief is that effective individuals & small talented teams make the most impact. Free of mediating procedural burdens, raw talent brings creativity, especially if team coheres naturally.

So I sought to create my own systems & work as a freelance consultant in 2012.

## 🌐 Open Source Software

Open source software creates continuity, particularly in the tooling, libraries, & frameworks proving a foundation for products.

Proprietary systems are a common secret sauce of an enterprise to participate with & be rewarded by the market. There are open source products, but in the current market, the product most often is the revenue driver. Yes, services also drive in revenue, like in my case, yet a product to attract people fuels the production.

As a consulting developer working on many projects, a common toolchain helps to use work & know-how with other engagements. Open source libraries & frameworks are available for developers to use. This re-use provides tooling that would otherwise need to be built from scratch, saving effort & time. The programmer needs to interface with these libraries.

## 🍯 Development "Secret Sauce"

Just like a library, development methodology, frameworks, & patterns can be used to improve code re-use, maintainability, domain modeling, & enhance general productivity. I will be writing some blog posts on techniques such as:

* Domain Driven Design
* Flatish Architecture & Name Systems
* MPA & SPA web app architectures
* Software prototypes
* Using Monorepos & Git submodules to maximize code re-use

## 🚀 Software Product Creation & Maintenance

Libraries, frameworks, methodology, & patterns means software products can be created & maintained. As the state of the art improves, software products can be created & maintained with efficiency. With much of the challenges in building with a unified javascript development ecosystem solved, we can focus on efficient product development with maximum code re-use.

## 🗓 Flatish Architecture & Name Systems

Abstraction is used to organize software libraries.

> There are only two hard things in Computer Science: cache invalidation and naming things.
> -- Phil Karlton

Naming conventions are much loved to bring organization & familiarity to a codebase. Javascript is a flexible & dynamic language. The community has largely settled on camelCase name convention to join words. Yet camelCase has some disadvantages. For one, the case of a word can change depending on where it is located in the variable name. The first word is lower case while subsequent words are Upper Case. When maintaining a codebase, global searches are commonly used.

# Interests

## Meta-Philosophy

From the question "how do we model ${existence__tb_a_()}?" sprang a ${philosophy__tb_a_()}.

This meta-philosophy can be applied via ${tb_a_({ href: '/posts/magic-connections-with-the-philosophy-of-language'}, `language`)} to model any reified entity. Language patterns can be utilized in software & speech to create models of Existence.

## ${electric_universe__tb_a_()}

Viewing the Universe through the lens of Electricity & Magnetism.  The same well known electrical equations & circuit theory can be applied from the micro to the cosmic, with surprising twists. The incomprehensible becomes understood with an effective model.

## Health

Enjoying a low-carb diet. Utilizing knowledge of electrical interactions within the body to strategically utilize
food & supplements for optimal health.

## Holochain

Agent-centric crypto platform, inspired by nature. The ${holochain_whitepaper__tb_a_()} is worth a read. Here are some ${tb_a_({ href: 'https://github.com/btakita/holochain-notes/blob/master/whitepaper.md' }, 'notes')}.

## 🌙 Divination

Writing software effectively is creating a logic model that a machine can execute. The interface between the programmer & the machine. Similar to writing, programming allows one to organize an ontology using abstractions. The executable software provides feedback on the logical consistency of the model. If there are logic issues, there are bugs. With tools such as type systems, tests, & validations, the software will result in errors. This process of discovery allows one to explore conceptual systems with a logic feedback loop revealing insights into Existence.

${div_(img_({ src: dev_svg, class: 'sm:w-1/2 mx-auto', alt: 'coding dev illustration' }), attribution_dev__sup_({ ctx }))}

${footnote_list__div_({ ctx })}
			`.trim())
			// @formatter:on
		])
	)
}
