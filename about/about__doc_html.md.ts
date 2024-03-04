import { site__title_ } from '@rappstack/domain--server/site'
import { md__raw_ } from '@rappstack/ui--any/md'
import { tag_class } from '@rappstack/ui--server--blog/tag'
import { class_ } from 'ctx-core/html'
import { type request_ctx_T } from 'relysjs/server'
import {
	bunjs__tb_a_,
	ctx_core__tb_a_,
	drizzle_orm__tb_a_,
	existence__tb_a_,
	philosophy__tb_a_,
	rappstack__tb_a_,
	redis__tb_a_,
	relementjs__tb_a_,
	relysjs__tb_a_,
	rmemo__tb_a_,
	sqlite__tb_a_
} from '../anchor/index.js'
import {
	svgrepo_globe_with_meridians_,
	svgrepo_grid_,
	svgrepo_honey_pot_sweet_dessert_food_,
	svgrepo_oncoming_fist_skin_2_,
	svgrepo_rocket_,
	svgrepo_sparkling_heart_
} from '../icon/index.js'
import { md_layout__doc_html_ } from '../md/index.js'
export function about__doc_html_({
	ctx,
}:{
	ctx:request_ctx_T
}) {
	return (
		md_layout__doc_html_({
			ctx,
			title: 'About | ' + site__title_(ctx),
			h1_text: 'About ' + site__title_(ctx),
			description: 'Contextual full stack systems developer',
			active_link: 'about',
		}, [
			// @formatter:off
			// language=md
			md__raw_(`
I create full stack software solutions.

My preferred tooling is:

${[
	bunjs__tb_a_, drizzle_orm__tb_a_, ctx_core__tb_a_, relysjs__tb_a_, rmemo__tb_a_, relementjs__tb_a_, redis__tb_a_, sqlite__tb_a_, rappstack__tb_a_
].map(a_=>a_({ class: class_(tag_class) })).join(' ')}

With over 20 years of professional development experience. I have been a part of many projects & fantastic teams. See a [portfolio](/portfolio) of some of my work. I'm excited about the latest set of tools. The javascript ecosystem has a comprehensive, high-performance, set of isomorphic full-stack solutions. And machine learning + vector databases. Over the last few years, I have worked on libraries to take advantage of this inevitable outcome.

[//]: 💖
## Crafting software since 2002 with ${svgrepo_sparkling_heart_({ class: 'inline-block h-6 w-6' })}

Personal systems has been an instrumental tool in working with the chaos of the world. My career began during the .com collapse. It continued with the rise of Web 2.0, consulting gigs with startups, Web 3.0, & the rise of machine learning. With these changes, I strive to create continuity in work.

[//]: 👊🏼
## ${svgrepo_oncoming_fist_skin_2_({ class: 'inline-block h-6 w-6' })} Skin in the game

I love the collaborative creative energy in startup companies. The team has a goal to make an impact & to reach the next level of funding. Concentrated talent with strong opinions. Unifying process & tooling is necessary for effective collaboration. Pressure to fulfill expectations & metrics drives the engine of creation. A well-oiled machine is beautiful.

I seek a better way that aligns with my personal systems to use continuity to drive the creative process. My belief is that effective individuals & small talented teams make the most impact. Raw talent brings creativity, especially with a natural cohering team.

So I sought to create my own systems & work as a freelance consultant in 2012.

[//]: 🌐
## ${svgrepo_globe_with_meridians_({ class: 'inline-block h-6 w-6' })} Open Source Software

Open source software creates continuity. Particularly in tooling, libraries, & frameworks which provide a foundation for products.

I am consulting developer working on many projects. An open source toolchain helps to share work & know-how with many projects. This re-use saves effort & time.

[//]: 🍯
## ${svgrepo_honey_pot_sweet_dessert_food_({ class: 'inline-block h-6 w-6' })} Development "Secret Sauce"

Development methods, frameworks, & patterns help. To improve code re-use, maintainability, domain modeling, & enhance general productivity. I will be writing some blog posts on techniques such as:

* Domain Driven Design
* Flat Architecture & Name Systems
* MPA & SPA web app architectures
* Software prototypes
* Using Monorepos & Git submodules to maximize code re-use

[//]: 🚀
## ${svgrepo_rocket_({ class: 'inline-block h-6 w-6' })} Software Product Creation & Maintenance

Libraries, frameworks, methods, & patterns aid creating & maintaining software. The state of the art brings more options for an efficient development process. The unified javascript & web development ecosystem is improving. These improvements allows us to focus on efficient product development and code re-use.

[//]: 🗓
## ${svgrepo_grid_({ class: 'inline-block h-6 w-6' })} Flat Architecture & Name Systems

Abstraction organizes software libraries.

> There are only two hard things in Computer Science: cache invalidation and naming things.
> -- Phil Karlton

Name conventions are much loved to bring organization & familiarity to a codebase. Javascript is a flexible & dynamic language. The majority of the javascript community uses the camelCase convention to join words. Yet camelCase has some disadvantages. For one, the case of a word changes depending on it's location in the variable name. The first word is lower case while the following words are Upper Case. This leads to inconsistency. Which makes global code searches more difficult.

The [Tag Vector](/posts/tag-vector-0-introduction) name system keeps the integrity of the names. Tags connect with a vector. Since a vector has a direction, the Tag Vector expresses the shape of the abstraction. Tag Vector supports tags that are camelCase or underscore_case. This flexibility integrates apis without changing the name of api abstraction.

## Interests

### Meta-Philosophy

From the question "how do we model ${existence__tb_a_()}?" sprang a ${philosophy__tb_a_()}.

This meta-philosophy applies language to model any reified entity. Language patterns in software & speech to create models of Existence.
			`.trim())
			// @formatter:on
		])
	)
}
