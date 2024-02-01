import { md__raw_ } from '@btakita/ui--any--blog/md'
import { tb_a_ } from '@btakita/ui--server--blog/anchor'
import { type request_ctx_T } from 'relysjs/server'
import {
	astrojs__tb_a_,
	astropaper__tb_a_,
	aws__tb_a_,
	backbonejs__tb_a_,
	briantakita_me_dev__tb_a_,
	bunjs__tb_a_,
	cacheable_flash__tb_a_,
	censible__tb_a_,
	cordova__tb_a_,
	ctx_core__tb_a_,
	docker__tb_a_,
	elysiajs__tb_a_,
	engine_yard__tb_a_,
	erector__tb_a_,
	esg__tb_a_,
	foresight_host__tb_a_,
	heroku__tb_a_,
	honk__tb_a_, jquery__tb_a_,
	lucene__tb_a_,
	martin_investments__tb_a_,
	menu__tb_a_,
	milyoni__tb_a_,
	nanostores__tb_a_,
	neo__tb_a_,
	news_corp__tb_a_,
	nextcloud__tb_a_,
	nodejs__tb_a_,
	pnpm__tb_a_,
	postgres__tb_a_,
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
	strapi__tb_a_,
	sveltejs__tb_a_,
	truecar__tb_a_,
	unison__tb_a_,
	usaa__tb_a_,
	wsj__tb_a_
} from '../anchor/index.ts'
import { md_layout__doc_html_ } from '../md/index.ts'
export function portfolio__doc_html_({
	ctx
}:{
	ctx:request_ctx_T
}) {
  return (
		md_layout__doc_html_({
			ctx,
			title: 'Portfolio',
			active_link: 'portfolio',
		}, [
			// @formatter:off
			// language=md
			md__raw_(`
## [briantakita.me](https://www.briantakita.me)

${briantakita_me_dev__tb_a_()} static app with libraries forked from ${astropaper__tb_a_()}. I did some refactoring including converting it to a monorepo, used solidjs instead of react, and added ctx-core & Nano Stores. These changes improve code re-use to be used in other profile sites which I will soon work on. I plan on adding support for ${strapi__tb_a_()}, so people without technical experience can write posts on their own optimized blog.

Stack:

* ${bunjs__tb_a_()}
* ${elysiajs__tb_a_()}
* ${ctx_core__tb_a_()}
* ${relysjs__tb_a_()}
* ${relementjs__tb_a_()}
* ${rmemo__tb_a_()}
* ${docker__tb_a_()}
* VPS

## ${martin_investments__tb_a_()}

Designed & Built an analyst & customer portal for ESG investment funds. Created ESG analysis algorithms to rate companies according to Environment & Women in Leadership criteria.

Utilized various financial APIs. Built a XLSX exporter spanning > 10000 rows & hundreds of columns using ${tb_a_({ href: 'https://en.wikipedia.org/wiki/Office_Open_XML' }, 'Office Open XML')} replicating the ESG analysis algorithms & deep linking across the document & to relevant web content.

Built SVG & PDF exporters of portfolio & company ESG reports.

Stack:

* ${nodejs__tb_a_()}, ${pnpm__tb_a_()}
* ${ctx_core__tb_a_()}
* ${astrojs__tb_a_()}
* ${nanostores__tb_a_()}
* ${solidjs__tb_a_()}
* ${redis__tb_a_()}
* ${docker__tb_a_()}
* VPS

## ${censible__tb_a_()}

Progressive Web App that enables the client to upload their portfolio from a CSV file and rebalance their portfolio based on ESG metrics compared to an Index Fund benchmark. The client can select ${esg__tb_a_()} Issue criteria (for scoring) & binary restriction criteria to identify securities that cross ethical boundaries. This app uses a market value weighted color bar, based on segmented scores, to indicate the areas of improvement. Client can search for securities to add or replace based on Name, Industry Peers, Industry Sectors, Market Cap Groups, Geographic Regions, & Economic Regions. Shows which positions to trade to obtain a desired ESG outcome. Also contains a printable report and industry sector analysis of the portfolio & benchmark fund.

### ${tb_a_({ href: 'https://esg.censible.co/company-etf-and-mutual-fund-rankings/women-in-leadership' }, `Women In Leadership Report`)}

Market survey of Women in corporate leadership positions. Scoring methodology applied to Aggregate analysis, Best Performing Companies, Best Performing Large Companies, Worst Performing Companies, Best & Worst Performing Funds, Largest Funds, & Socially Responsible Funds.

Stack:

* ${nodejs__tb_a_()}, ${pnpm__tb_a_()}
* ${ctx_core__tb_a_()}
* ${astrojs__tb_a_()}
* ${nanostores__tb_a_()}
* ${solidjs__tb_a_()}
* ${solid_start__tb_a_()}
* ${postgres__tb_a_()}
* ${redis__tb_a_()}
* ${heroku__tb_a_()}

## ${menu__tb_a_()}

Front end development of the menu.com multi-tenant app. Consumer web app, restaurant back-office, & back-office Cordova app.

Stack:

* ${sveltejs__tb_a_()}
* ${ctx_core__tb_a_()}
* ${sapper__tb_a_()}
* ${cordova__tb_a_()}
* ${aws__tb_a_()}

## ${foresight_host__tb_a_()}

Private NextCloud groupware site with some custom plugins.

Stack:

* ${nextcloud__tb_a_()}
* ${docker__tb_a_()}
* VPS

## ${neo__tb_a_()}

Worked with the previous incarnation as an inclubator & consulting firm of Neo before it's acquisition. The client was Tenfore Holdings, an investment fund. The project was a low-code document writer with integrated search into the client's ${salesforce__tb_a_()} using Salesforce cloud.

Stack:

* ${nodejs__tb_a_()}
* ${riotjs__tb_a_()}
* ${rethinkdb__tb_a_()}
* ${heroku__tb_a_()}

## Rundavoo

Web front-end development for social planning & decision app for restaurant patrons. Mobile cordova app was included in the Google's ${tb_a_({ href: 'https://www.techtimes.com/articles/21235/20141202/heres-best-apps-2014-list-google.htm' }, `Best Apps of 2014 List`)}.

Web front-end development for social planning & decision app for restaurant patrons. Mobile cordova app was included in the

Stack:

* ${riotjs__tb_a_()}
* ${backbonejs__tb_a_()}
* ${heroku__tb_a_()}

## ${milyoni__tb_a_()}

Consulting developer for social entertainment platform. Developed scalable live video events with admin message moderation & components, on-demand movies with time-coded chat & interactive components.

Stack:

* ${ruby_on_rails__tb_a_()}
* ${nodejs__tb_a_()}
* ${postgres__tb_a_}
* ${redis__tb_a_()}
* ${heroku__tb_a_()}

## ${honk__tb_a_()}

Lead developer for automotive pricing & info startup. Built product from initial concept through acquisition by ${truecar__tb_a_()}. Key partnerships include ${news_corp__tb_a_()}, ${wsj__tb_a_()}, ${usaa__tb_a_()}.

Stack:

* ${ruby_on_rails__tb_a_()}
* ${sinatrarb__tb_a_()}
* ${erector__tb_a_()}
* ${backbonejs__tb_a_()}
* ${postgres__tb_a_()}
* ${lucene__tb_a_()}
* ${engine_yard__tb_a_()}

## Pivotal Labs

Agile engineer with Web2.0 consulting firm & startup incubator from 2005-2009. Pivotal Labs was acquired by EMC & became VM Ware Tunzu after I left. At Pivotal, I worked with > 20 startup companies, bootstrapping their product development, engineer process, & mentoring developers. While at Pivotal Labs I worked on open source libraries including:

* ${rspec__tb_a_()}
* ${rr__tb_a_()}
* ${erector__tb_a_()}
* ${unison__tb_a_()}
* ${cacheable_flash__tb_a_()}

I spoke at the ${tb_a_({ href: 'https://www.oreilly.com/pub/pr/1966' }, `2008 Rails Conf`)}.

Stack:

* ${ruby_on_rails__tb_a_()}
* ${sinatrarb__tb_a_()}
* ${erector__tb_a_()}
* ${backbonejs__tb_a_()}
* ${jquery__tb_a_()}
* ${postgres__tb_a_()}
* ${lucene__tb_a_()}
* ${aws__tb_a_()}
* ${heroku__tb_a_()}
`.trim())
			// @formatter:on
		])
	)
}
