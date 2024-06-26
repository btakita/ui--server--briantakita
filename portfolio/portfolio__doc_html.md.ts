import { Person_id_ref_, Person_image } from '@btakita/domain--server--briantakita/jsonld'
import {
	jsonld__add,
	jsonld_id__new,
	WebPage__description__set,
	WebPage__hasPart__push,
	WebPage__headline__set,
	WebPage__name__set,
	WebPage_id_ref_
} from '@rappstack/domain--server/jsonld'
import { request_url__href_ } from '@rappstack/domain--server/request'
import { site__title_ } from '@rappstack/domain--server/site'
import { tb_a_ } from '@rappstack/ui--any/anchor'
import { dl_tree_ } from '@rappstack/ui--any/dl'
import { nl } from '@rappstack/ui--any/string'
import { tag_class } from '@rappstack/ui--server--blog/tag'
import { raw_ } from 'relementjs'
import { span_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import type { Article } from 'schema-dts'
import {
	astrojs__tb_a_,
	astropaper__tb_a_,
	aws__tb_a_,
	backbonejs__tb_a_,
	briantakita_me_dev__tb_a_,
	brookebrodack_dev__tb_a_,
	brookebrodack_net__tb_a_,
	bunjs__tb_a_,
	cacheable_flash__tb_a_,
	censible__tb_a_,
	cordova__tb_a_,
	ctx_core__tb_a_,
	docker__tb_a_,
	drizzle_orm__tb_a_,
	elysiajs__tb_a_,
	engine_yard__tb_a_,
	erector__tb_a_,
	esg__tb_a_,
	foresight_host__tb_a_,
	heroku__tb_a_,
	honk__tb_a_,
	hyop__tb_a_,
	lucene__tb_a_,
	martin_investments__tb_a_,
	menu__tb_a_,
	milyoni__tb_a_,
	motion_one__tb_a_,
	nanostores__tb_a_,
	neo__tb_a_,
	news_corp__tb_a_,
	nextcloud__tb_a_,
	nodejs__tb_a_,
	pnpm__tb_a_,
	postgres__tb_a_,
	rappstack__tb_a_,
	redis__tb_a_,
	relementjs__tb_a_,
	relysjs__tb_a_,
	rethinkdb__tb_a_,
	riotjs__tb_a_,
	rmemo__tb_a_,
	rr__tb_a_,
	rspec__tb_a_,
	ruby_on_rails__tb_a_,
	salesforce__tb_a_,
	sapper__tb_a_,
	sinatrarb__tb_a_,
	solid_start__tb_a_,
	solidjs__tb_a_,
	sqlite__tb_a_,
	sveltejs__tb_a_,
	truecar__tb_a_,
	unison__tb_a_,
	usaa__tb_a_,
	wsj__tb_a_
} from '../anchor/index.js'
import { md_layout__doc_html_ } from '../md/index.js'
import { stack__details_ } from '../stack/index.js'
import { sticky__h1_, sticky_h2__dl_tree_props_ } from '../sticky/index.js'
export function portfolio__doc_html_({
	ctx,
	portfolio__html,
	articleBody,
}:{
	ctx:request_ctx_T
	portfolio__html:string
	articleBody:string
}) {
	const title = 'Portfolio | ' + site__title_(ctx)
	const description = 'Brian Takita\'s client project work.'
	WebPage__name__set(ctx, title)
	WebPage__headline__set(ctx, title)
	WebPage__description__set(ctx, description)
	const Article_id_ref = jsonld__add(ctx, ()=><Article>{
		'@id': jsonld_id__new(ctx, 'Article'),
		'@type': 'Article',
		about: WebPage_id_ref_(ctx),
		author: Person_id_ref_(ctx),
		headline: title,
		image: Person_image,
		name: title,
		description,
		url: request_url__href_(ctx),
		articleBody,
	})
	WebPage__hasPart__push(ctx, Article_id_ref)
	return (
		md_layout__doc_html_({
			ctx,
			title,
			description,
			header_class: 'contents',
			h1_dom: sticky__h1_({ title: 'Portfolio', class: 'mb-0' }),
			active_link: 'portfolio',
		}, [
			raw_(portfolio__html)
		])
	)
}
export function portfolio__html_({ ctx }:{ ctx:request_ctx_T }) {
	// @formatter:off
	// language=md
	return ''
		+ dl_tree_({ ctx, _: sticky_h2__dl_tree_props_ }, ()=>[
			[`## [briantakita.me](https://briantakita.me)`, [
				`${briantakita_me_dev__tb_a_()} started from a fork from ${astropaper__tb_a_()}. Optimized the performance, SEO, & semantic markup with json-ld. I develop & experiment with software tech on this site.`,
				nl,
				`${stack__details_(
					rappstack__tb_a_,
					bunjs__tb_a_,
					elysiajs__tb_a_,
					ctx_core__tb_a_,
					relysjs__tb_a_,
					relementjs__tb_a_,
					rmemo__tb_a_,
					docker__tb_a_,
					($p:{ class?:string })=>span_($p, 'VPS'),
				)}`]],
			[`## ${brookebrodack_net__tb_a_()}`, [
				`Brooke Brodack is one of the original YouTube personalities. Her character, Brookers, once had the most subscribers on YouTube. This site features the Brookers Timeline & Brooke Brodack's current Youtube Content. Embedding the YouTube & Internet Archive players. rmemo shines in this implementation to manage the player state & web animations. The web animation logic improved after switching from ${motion_one__tb_a_()} to rmemo. The ${brookebrodack_dev__tb_a_('source code')} is under the Apache 2 license.`,
				nl,
				`${stack__details_(
					rappstack__tb_a_,
					bunjs__tb_a_,
					sqlite__tb_a_,
					drizzle_orm__tb_a_,
					elysiajs__tb_a_,
					hyop__tb_a_,
					ctx_core__tb_a_,
					relysjs__tb_a_,
					relementjs__tb_a_,
					rmemo__tb_a_,
					docker__tb_a_,
					($p:{ class?:string })=>span_($p, 'VPS'),
				)}`,]],
			[`## ${martin_investments__tb_a_()}`, [
				`Designed & Built an analyst & customer portal for ESG investment funds. ESG analysis algorithms to rate companies according to Environment & Women in Leadership criteria.`,
				nl,
				`Utilized various financial APIs. Built a XLSX exporter spanning > 10000 rows & hundreds of columns. Exported the ESG analysis algorithms into Excel documents. Wrote direct ${tb_a_({ href: 'https://en.wikipedia.org/wiki/Office_Open_XML', nofollow: true }, 'Office Open XML')}. Included deep linking across the document & to relevant web content.`,
				nl,
				`Built SVG & PDF exporters of portfolio & company ESG reports.`,
				nl,
				`${stack__details_(
					nodejs__tb_a_,
					pnpm__tb_a_,
					ctx_core__tb_a_,
					astrojs__tb_a_,
					nanostores__tb_a_,
					solidjs__tb_a_,
					redis__tb_a_,
					docker__tb_a_,
					($p:{ class?:string })=>span_($p, 'VPS'),
				)}`,]],
			[`## ${censible__tb_a_()}`, [
				`Progressive Web App. Enables you to upload your stock portfolio from a CSV file. Rebalances your portfolio based on ESG metrics compared to an Index Fund benchmark. You can select ${esg__tb_a_()} Issue criteria (for scoring). And binary restriction criteria to identify securities that cross ethical boundaries. This app uses a market value weighted color bar, based on segmented scores. Highlighting areas of improvement.`,
				nl,
				`You add or replace securities by the following. Name, Industry Peers, Industry Sectors, Market Cap Groups, Geographic Regions, & Economic Regions. Shows which positions to trade to optimize the ESG score. You can print a PDF report and industry sector analysis of the portfolio & benchmark fund.`,
				()=>[
					[`### ${tb_a_({ href: 'https://esg.censible.co/company-etf-and-mutual-fund-rankings/women-in-leadership', nofollow: true }, `Women In Leadership Report`)}`, [
						`Market survey of Women in corporate leadership positions. Scoring applied to analysis. Analysis includes:`,
						nl,
						`- Best Performing Companies`,
						`- Best Performing Large Companies`,
						`- Worst Performing Companies`,
						`- Best & Worst Performing Funds`,
						`- Largest Funds`,
						`- Socially Responsible Funds.`,,
						nl,
						`${stack__details_(
							nodejs__tb_a_,
							pnpm__tb_a_,
							ctx_core__tb_a_,
							astrojs__tb_a_,
							nanostores__tb_a_,
							solidjs__tb_a_,
							solid_start__tb_a_,
							postgres__tb_a_,
							redis__tb_a_,
							heroku__tb_a_,
						)}`,]],],]],
			[`## ${menu__tb_a_()}`, [
				`Front end development of the menu.com multi-tenant app. Consumer web app, restaurant back-office, & back-office Cordova app.`,
				nl,
				`${stack__details_(
					sveltejs__tb_a_,
					ctx_core__tb_a_,
					sapper__tb_a_,
					cordova__tb_a_,
					aws__tb_a_,
				)}`,]],
			[`## ${foresight_host__tb_a_()}`, [
				`Private NextCloud groupware site with some custom plugins.`,
				nl,
				`${stack__details_(
					nextcloud__tb_a_,
					docker__tb_a_,
					()=>'VPS')}`,]],
			[`## ${neo__tb_a_()}`, [
				`Worked with the previous incarnation of Neo before it's acquisition. The client was Tenfore Holdings, an investment fund. A low-code document writer integrating search into the client's ${salesforce__tb_a_()} cloud account.`,
				nl,
				`${stack__details_(
					nodejs__tb_a_,
					riotjs__tb_a_,
					rethinkdb__tb_a_,
					heroku__tb_a_,
				)}`,]],
			[`## Rundavoo`, [
				`Web front-end development for social planning & decision app for restaurant patrons. Mobile cordova app ranked in Google's ${tb_a_({ href: 'https://www.techtimes.com/articles/21235/20141202/heres-best-apps-2014-list-google.htm', nofollow: true }, `Best Apps of 2014 List`)}.`,
				nl,
				`Web front-end development for social planning & decision app for restaurant patrons.`,
				nl,
				`${stack__details_(
					riotjs__tb_a_,
					backbonejs__tb_a_,
					heroku__tb_a_)}`,]],
			[`## ${milyoni__tb_a_()}`, [
				`Consulting developer for social entertainment platform. Scalable live video events with admin message moderation & components. On-demand movies with time-coded chat & interactive components.`,
				nl,
				`${stack__details_(
					ruby_on_rails__tb_a_,
					nodejs__tb_a_,
					postgres__tb_a_,
					redis__tb_a_,
					heroku__tb_a_,
				)}`,]],
			[`## ${honk__tb_a_()}`, [
				`Lead developer for automotive pricing & info startup. Built product from initial concept through acquisition by ${truecar__tb_a_()}. Key partnerships include ${news_corp__tb_a_()}, ${wsj__tb_a_()}, ${usaa__tb_a_()}.`,
				nl,
				`${stack__details_(
					ruby_on_rails__tb_a_,
					sinatrarb__tb_a_,
					erector__tb_a_,
					backbonejs__tb_a_,
					postgres__tb_a_,
					lucene__tb_a_,
					engine_yard__tb_a_,
				)}`,]],
			[`## Pivotal Labs`, [
				`Agile engineer with Web2.0 consulting firm & startup incubator from 2005-2009. EMC acquired Pivotal Labs. VM Ware Tunzu acquired EMC. I worked with > 20 startup companies. I bootstrapped their product development, engineer process, & mentoring developers. While at Pivotal Labs I worked on open source libraries including:`,
				nl,
				`${[rspec__tb_a_, rr__tb_a_, erector__tb_a_, unison__tb_a_, cacheable_flash__tb_a_].map(a_=>a_({ class: tag_class })).join(' ')}`,
				nl,
				`I spoke at the ${tb_a_({ href: 'https://www.oreilly.com/pub/pr/1966', nofollow: true }, `2008 Rails Conf`)}.`,]],
		])
	// @formatter:on
}
