import {
	AboutPage__description_,
	AboutPage_id_ref_,
	Person_id_ref_,
	Person_image
} from '@btakita/domain--server--briantakita/jsonld'
import { jsonld__add, jsonld_id__new } from '@rappstack/domain--server/jsonld'
import { request_url__href_ } from '@rappstack/domain--server/request'
import { site__title_ } from '@rappstack/domain--server/site'
import { dl_tree_ } from '@rappstack/ui--any/dl'
import { nl } from '@rappstack/ui--any/string'
import { footnote__sup_ } from '@rappstack/ui--server--blog/footnote'
import { tag_class } from '@rappstack/ui--server--blog/tag'
import { class_ } from 'ctx-core/html'
import { raw_, type tag_dom_T } from 'relementjs'
import { div_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import type { Article } from 'schema-dts'
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
import { sticky__h1_, sticky_h2__dl_tree_props_ } from '../sticky/index.js'
type about__doc_html_props_T = {
	ctx:request_ctx_T
	articleBody:string
	about__html:string
}
export function about__doc_html_($p:about__doc_html_props_T) {
	const {
		ctx,
		about__html,
		articleBody,
	} = $p
	const title = 'About | ' + site__title_(ctx)
	const description = AboutPage__description_(ctx)
	jsonld__add(ctx, ()=><Article>{
		'@id': jsonld_id__new(ctx, 'Article'),
		'@type': 'Article',
		about: AboutPage_id_ref_(ctx),
		author: Person_id_ref_(ctx),
		headline: title,
		image: Person_image,
		name: title,
		description,
		url: request_url__href_(ctx),
		articleBody,
	})
	return (
		md_layout__doc_html_({
			ctx,
			title,
			h1_dom: sticky__h1_({ title, }),
			hero_class: class_(
				'mb-6',
				'prose'),
			hero_p_text: '',
			description,
			active_link: 'about',
		}, [
			raw_(about__html)
		])
	)
}
export function about__html_({ ctx }:{ ctx:request_ctx_T }) {
	// @formatter:off
	// language=md
	return ''
		+ dl_tree_({ ctx, _: sticky_h2__dl_tree_props_ }, ()=>[
			[`## Efficient full stack software systems that grow with you`, [
				`I create full stack software solutions${
					footnote__sup_({ ctx, id: 'preferred-tooling' }, [
						'My preferred tooling is:',
						raw_([bunjs__tb_a_, drizzle_orm__tb_a_, ctx_core__tb_a_, relysjs__tb_a_, rmemo__tb_a_, relementjs__tb_a_, redis__tb_a_, sqlite__tb_a_, rappstack__tb_a_].map(a_=>a_({ class: class_(tag_class) })).join(' '))
					])
				}. With over 20 years of professional development experience. Here is a [portfolio](/portfolio) of some of my work. I focus on creating isomorphic codebases. Sharing logic & rendering between the server & browser. This maximizes flexibility with crafting web apps. This detailed crafting creates efficient apps free from bloat.`,]],
			[/*💖*/`## ${icon_line_([svgrepo_sparkling_heart_({ class: 'inline-block h-4 w-4' }), 'Crafting software since 2002'])}`, [
				`Personal systems has been an instrumental tool in working with the chaos of the world. My career began during the .com collapse. It continued with the rise of Web 2.0, consulting gigs with startups, Web 3.0, & the rise of machine learning. With these changes, I strive to create continuity in work & the rest of my life.`,]],
			[/*👊🏼*/`## ${icon_line_([svgrepo_oncoming_fist_skin_2_({ class: 'inline-block h-4 w-4' }), 'Skin in the game'])}`, [
				`I love the collaborative creative energy in startup companies. The team has a goal to make an impact & to reach the next level of funding. Concentrated talent with strong opinions. Unifying process & tooling is necessary for effective collaboration. Pressure to fulfill expectations & metrics drives the engine of creation. A well-oiled machine is beautiful.`,
				nl,
				`I seek a better way that aligns with my personal systems to use continuity to drive the creative process. My belief is that effective individuals & small talented teams make the most impact. Raw talent brings creativity, especially with a natural cohering team.`,
				nl,
				`So I sought to create my own systems & work as a freelance consultant in 2012.`,]],
			[/*🌐*/`## ${icon_line_([svgrepo_globe_with_meridians_({ class: 'inline-block h-4 w-4' }), 'Open Source Software'])}`, [
				`Open source software creates continuity. Particularly in tooling, libraries, & frameworks which provide a foundation for products.`,
				nl,
				`I am consulting developer working on many projects. An open source toolchain helps to share work & know-how with many projects. This re-use saves effort & time.`,]],
			[/*🍯*/`## ${icon_line_([svgrepo_honey_pot_sweet_dessert_food_({ class: 'inline-block h-4 w-4' }), 'Development "Secret Sauce"'])}`, [
				`Development methods, frameworks, & patterns help. To improve code re-use, maintainability, domain modeling, & enhance general productivity. I will be writing some blog posts on techniques such as:`,
				nl,
				`- Domain Driven Design`,
				`- Flat Architecture & Name Systems`,
				`- Multi Page App & Single Page App architectures`,
				`- Software prototypes`,
				`- Using Monorepos & Git submodules to maximize code re-use`,]],
			[/*🚀*/`## ${icon_line_([svgrepo_rocket_({ class: 'inline-block h-4 w-4' }), 'Software Product Creation & Maintenance'])}`, [
				`Libraries, frameworks, methods, & patterns aid creating & maintaining software. The state of the art brings more options for an efficient development process. The unified javascript & web development ecosystem is improving. These improvements allows us to focus on efficient product development and code re-use.`,]],
			[/*🗓*/`## ${icon_line_([svgrepo_grid_({ class: 'inline-block h-4 w-4' }), 'Flat Architecture & Name Systems'])}`, [
				`Abstraction organizes software libraries.`,
				nl,
				`> There are only two hard things in Computer Science: cache invalidation and naming things.`,
				`> -- Phil Karlton`,
				nl,
				`Name conventions are much loved to bring organization & familiarity to a codebase. Javascript is a flexible & dynamic language. The majority of the javascript community uses the camelCase convention to join words. Yet camelCase has some disadvantages. For one, the case of a word changes depending on it's location in the variable name. The first word is lower case while the following words are Upper Case. This leads to inconsistency. Which makes global code searches more difficult.`,
				nl,
				`The [Tag Vector](/posts/tag-vector-0-introduction) name system keeps the integrity of the names. Tags connect with a vector. Since a vector has a direction, the Tag Vector expresses the shape of the abstraction. Tag Vector supports tags that are camelCase or underscore_case. This flexibility integrates apis without changing the name of api abstraction.`,]],
			[`## Interests`, [
				()=>[
					[`### Meta-Philosophy`, [
						`From the question "how do we model ${existence__tb_a_()}?" sprang a ${philosophy__tb_a_()}.`,
						nl,
						`This meta-philosophy applies language to model any reified entity. Language patterns in software & speech to create models of Existence.`,]],],]],
		])
	// @formatter:on
}
function icon_line_([icon, text]:[icon:tag_dom_T, text:tag_dom_T]) {
	return [
		div_({
			class: class_(
				'flex',
				'gap-2',
				'items-center')
		}, [
			icon,
			text
		]),
	]
}
