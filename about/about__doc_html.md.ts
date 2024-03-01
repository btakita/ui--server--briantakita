import { md__raw_ } from '@rappstack/ui--any/md'
import { footnote_list__div_ } from '@rappstack/ui--server--blog/footnote'
import { type request_ctx_T } from 'relysjs/server'
import {
	bunjs__tb_a_,
	ctx_core__tb_a_,
	drizzle_orm__tb_a_,
	electric_universe__tb_a_,
	existence__tb_a_,
	philosophy__tb_a_,
	rappstack__tb_a_,
	redis__tb_a_,
	relementjs__tb_a_,
	relysjs__tb_a_,
	rmemo__tb_a_,
	sqlite__tb_a_
} from '../anchor/index.js'
import { md_layout__doc_html_ } from '../md/index.js'
export function about__doc_html_({
	ctx,
}:{
	ctx:request_ctx_T
}) {
	return (
		md_layout__doc_html_({
			ctx,
			title: 'About Brian Takita',
			description: 'Contextual full stack systems developer',
			active_link: 'about',
		}, [
			// @formatter:off
			// language=md
			md__raw_(`
I create full stack software solutions.

My current preferred tooling is:

${[
	bunjs__tb_a_(), drizzle_orm__tb_a_(), ctx_core__tb_a_(), relysjs__tb_a_(), rmemo__tb_a_(), relementjs__tb_a_(), redis__tb_a_(), sqlite__tb_a_(), rappstack__tb_a_()
].join(' ')}

With over 20 years of professional development experience. I have been a part of many projects & fantastic teams. See a [portfolio](/portfolio) of some of my work. I'm excited about the latest set of tools. The javascript ecosystem has a comprehensive, high-performance, set of isomorphic full-stack solutions. And machine learning + vector databases. Over the last few years, I have worked on libraries to take advantage of this inevitable outcome.

## Crafting software since 2002 with 💖

Personal systems has been an instrumental tool in working with the chaos of the world. My career began during the .com collapse. It continued with the rise of Web 2.0, consulting gigs with startups, Web 3.0, & the rise of machine learning. With these changes, I strive to create continuity in work.

## 👊🏼 Skin in the game

I love the collaborative creative energy in startup companies. The team has a goal to make an impact & to reach the next level of funding. Concentrated talent with strong opinions. Unifying process & tooling is necessary for effective collaboration. Pressure to fulfill expectations & metrics drives the engine of creation. A well-oiled machine is beautiful.

I seek a better way that aligns with my personal systems to use continuity to drive the creative process. My belief is that effective individuals & small talented teams make the most impact. Raw talent brings creativity, especially with a natural cohering team.

So I sought to create my own systems & work as a freelance consultant in 2012.

## 🌐 Open Source Software

Open source software creates continuity. Particularly in tooling, libraries, & frameworks which provide a foundation for products.

I am consulting developer working on many projects. An open source toolchain helps to share work & know-how with many projects. This re-use saves effort & time.

## 🍯 Development "Secret Sauce"

Development methods, frameworks, & patterns help. To improve code re-use, maintainability, domain modeling, & enhance general productivity. I will be writing some blog posts on techniques such as:

* Domain Driven Design
* Flat Architecture & Name Systems
* MPA & SPA web app architectures
* Software prototypes
* Using Monorepos & Git submodules to maximize code re-use

## 🚀 Software Product Creation & Maintenance

Libraries, frameworks, methods, & patterns aid creating & maintaining software. The state of the art brings more options for an efficient development process. The unified javascript & web development ecosystem is improving. These improvements allows us to focus on efficient product development and code re-use.

## 🗓 Flatish Architecture & Name Systems

Abstraction organizes software libraries.

> There are only two hard things in Computer Science: cache invalidation and naming things.
> -- Phil Karlton

Name conventions are much loved to bring organization & familiarity to a codebase. Javascript is a flexible & dynamic language. The majority of the javascript community uses the camelCase convention to join words. Yet camelCase has some disadvantages. For one, the case of a word changes depending on it's location in the variable name. The first word is lower case while the following words are Upper Case. This leads to inconsistency. Which makes global code searches more difficult.

# Interests

## Meta-Philosophy

From the question "how do we model ${existence__tb_a_()}?" sprang a ${philosophy__tb_a_()}.

This meta-philosophy applies language to model any reified entity. Language patterns in software & speech to create models of Existence.

## ${electric_universe__tb_a_()}

Viewing the Universe through the lens of Electricity & Magnetism. The same electrical equations & circuit theory apply from the micro to the cosmic. The incomprehensible becomes understood with an effective model.

## 🌙 Divination

Writing software is creating logic models that a machine can execute. The interface between the programmer & the machine. Like writing, programming allows one to organize an ontology using abstractions. The executable software provides feedback on the logical consistency of the model. If there are logic issues, there are bugs. With tools such as type systems, tests, & validations, the software will result in errors. The discovery process allows you to explore conceptual systems. With a logic feedback loop revealing insights into Existence.

${footnote_list__div_({ ctx })}
			`.trim())
			// @formatter:on
		])
	)
}
