import { tb_a_ } from '@rappstack/ui--any/anchor'
import { md__raw_ } from '@rappstack/ui--any/md'
import { footnote__sup_, footnote_list__div_ } from '@rappstack/ui--server--blog/footnote'
import { a_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import {
	ado_net__tb_a_,
	apache2_license__tb_a_,
	astrojs__tb_a_,
	backbone_signal__tb_a_,
	backbonejs__tb_a_,
	c_sharp__tb_a_,
	ccrcorp__tb_a_,
	ctx_core__tb_a_,
	desertrb__tb_a_,
	generic_query_analyzer__tb_a_,
	honk__tb_a_,
	jasmine_flow__tb_a_,
	jasminejs__tb_a_,
	jellyrb__tb_a_,
	jquery__tb_a_,
	msaccess__tb_a_,
	msexcel__tb_a_,
	naming_convention__tb_a_,
	nanostores__tb_a_,
	pivotal_labs__tb_a_,
	poloniumrb__tb_a_,
	poof__tb_a_,
	rr__tb_a_,
	rspec__tb_a_,
	ruby_on_rails__tb_a_,
	rundavoo__tb_a_,
	screw_unit__tb_a_,
	smarty__tb_a_,
	solidjs__tb_a_,
	svelte_stores__tb_a_,
	sveltejs__tb_a_,
	unison__tb_a_,
	winforms__tb_a_
} from '../anchor/index.js'
import { md_layout__doc_html_ } from '../md/index.js'
export function open_source__doc_html_({
	ctx,
}:{
	ctx:request_ctx_T
}) {
	return (
		md_layout__doc_html_({
			ctx,
			title: 'Open Source',
			active_link: 'open-source',
		}, [
			// @formatter:off
			// language=md
			md__raw_(`
I work on open source projects, licensed with the ${apache2_license__tb_a_()}. I have primarily focused on	developing libraries to assist in my project work. I will be focusing on more open source components & apps in the	near future. Here are some notable projects:

## ${ctx_core__tb_a_()}

A collection of over 100 general purpose libraries to assist work creating libraries & apps. Development on ctx-core began in 2016 & continues today ${ctx_core_catch_all__footnote__sup_()}.

### Motivation

After maintaining several applications, I ran into the issues of:

* quickly creating & iterating on features
* extracting code to reuse
* time to refactor code
* time to upgrade software
* gluing together small libraries & snippets

Using existing solutions such as frameworks or libraries provides the benefit of quickly getting started, however there is a maintenance burden of:

* large payload size & memory usage
* extending the underlying software to fulfill requirements
* time to upgrade the application with the underlying libraries
* domain language mismatch between the library/framework

I found that there are usually small libraries & code snippets that can be glued together with a ${naming_convention__tb_a_('naming convention')} that utilizes unique, immutable, & composable names.	As a result, one could find all usages of an entity or concept by doing a project-wide search. Rename refactorings were more accurate & comprehensive due to the uniqueness of names. Composable naming allows one to understand the context & full description of the entity.

I use ctx-core to maintain software with:

* an accessible domain model
* a flat architecture
* active programming

### Usage

ctx-core uses dependency-injection of a \`ctx\` & "beings", (a function created with the \`be_\` factory function). The flat architecture reduces incidental complexity. To manage complex domains, Nested architecture provides scoping. The [Tag Vector](/posts/tag-vector-0-introduction) Convention, created while working on ctx-core, encodes tags joined by vectors & data structure shapes to express complex domains within a flat architecture.

Currently, I use ctx-core along with ${nanostores__tb_a_()} to manage reactive state on the server & the browser. ctx-core is a general purpose library & since nanostores is also a general purpose library any component library is supported. In my work, I favor ${nanostores__tb_a_()} to render components on the server & browser. ctx-core also supports ${sveltejs__tb_a_()} with ${svelte_stores__tb_a_()} to render components & manage reactive state on the server & browser.

## ${nanostores__tb_a_()}

I learned about Nano Stores via ${astrojs__tb_a_()}. Since I was already using ${svelte_stores__tb_a_()}, Nano Stores was a natural replacement to support global reactive state while supporting multiple component libraries, such as ${solidjs__tb_a_()}. I contributed a fix${nanostores_breadth_first_queue__footnote__sup_()} to diamond dependency bugs by using a breadth first queuing algorithm which I previously contributed to svelte stores${svelte_cyclic_breadth_first_queue__footnote__sup_()}. I also added soon to be released async support to \`computed\`${nanostores_computed_async__footnote__sup_()} & am working on adding autosubsciptions to \`computed\`.

## ${backbone_signal__tb_a_()}

I started using global state management with ${backbonejs__tb_a_()} while Lead Developer at ${honk__tb_a_()}. I ${a_({ href: '/posts/backbone-signal-practical-reactive-programming-javascript' }, `created backbone-signal`)} to use global state management with Backbone.js across different projects, while working with ${rundavoo__tb_a_()}.

## ${jasmine_flow__tb_a_()}

While at ${rundavoo__tb_a_()} I ${a_({ href: '/posts/jasmine-flow-fast-and-thourough-testing' }, `created jasmine-flow`)} to facilitate linear flow testing...saving effort in maintaining automated tests. This was hard-learned from maintaining various large apps while at ${honk__tb_a_()} & ${pivotal_labs__tb_a_()}.

## ${rr__tb_a_()}

RR (double Ruby) is a test double library for the Ruby language. I ${a_({ href: '/posts/introducing-rr' }, `released RR`)} back in 2008. It features a terse api to for a high signal to syntax noise ratio for read & write friendly automated testing. I used global state management to manage complex data interactions. I stopped development when I moved to full-stack Javascript development. Maintenance of this project was picked up by ${tb_a_({ href: 'https://github.com/kou' }, `Sutou Kouhei`)} in 2015.

## ${rspec__tb_a_()}

I was an early core maintainer on the rspec team. Rspec is the first DSL (Domain Specific Language) implementation of ${tb_a_({ href: 'https://dannorth.net/introducing-bdd/' }, 'BDD (Behavioral Driven Development)')}. Key contributions include the first known implementation of nested \`describe\` & \`context\` statements${rspec_nested_describes__footnote__sup_()}. The concept of nested describe was controversial at that time as it was thought it would add to the complexity & inhibit readability of the specs. However, nesting \`describe\` & \`context\` enabled contextual nesting with separate usage of \`beforeEach\` & \`afterEach\`. I championed the idea & delivered the implementation. I also integrated Rspec with ${tb_a_({ href: 'https://ruby-doc.org/stdlib-3.0.0/libdoc/test-unit/rdoc/Test/Unit.html' }, `Test::Unit`)}, worked on the initial mock implementation, & worked on the ${ruby_on_rails__tb_a_()} integration.

## ${desertrb__tb_a_()}

Desert is a Rails plugin framework that makes it easy to share models, views, controllers, helpers, routes, and migrations across your applications.

With Desert, reusability doesn’t come at the cost of extensibility: it’s trivial to extend the functionality of a plugin - both in your application and in other plugins.

Classes are automatically mixed in with your own or other plugins’ classes. This allows you to make full featured composable components.

## ${jellyrb__tb_a_()}

Jelly is an unobtrusive Javascript framework for ${jquery__tb_a_()} and ${ruby_on_rails__tb_a_()}. It provides a set of conventions and tools that help you organize your AJAX and client-side code, while keeping Javascript out of your views and markup. Jelly is the glue between your Rails controllers and jQuery events.

Jelly encourages and enables unit testing your Javascript code. Using a Javascript testing framework such as ${jasminejs__tb_a_()} or ${screw_unit__tb_a_()}, Jelly allows you to test AJAX and client-side events independently from your Rails app.

## ${poloniumrb__tb_a_()}

Selenium test runner & helpers for Rails. Featured a set of \`wait_for\` helpers to keep the tests in sync with the application.

## ${unison__tb_a_()}

Reactive in-memory relational caching library which syncs with upstream relational databases. Written in Ruby.

## ${screw_unit__tb_a_()}

Screw.Unit is a Behavior-Driven Testing Framework for Javascript. It features nested describes. Its goals are to
provide:

* a DSL for elegant, readable, organized specs;
* an interactive runner that can execute focused specs and describes;
* and brief, extensible source-code.

## ${generic_query_analyzer__tb_a_()}

A query analyzer using ${ado_net__tb_a_()}. I built this tool to run SQL queries on the ${msaccess__tb_a_()} CRM database & ${msexcel__tb_a_()} @ ${ccrcorp__tb_a_()}. Written with ${c_sharp__tb_a_()}, ${ado_net__tb_a_()}, ${winforms__tb_a_()}.

## ${poof__tb_a_()}

The PHP Object Oriented Framework is a framework library to build components in PHP. It was built as an alternative to using the ${smarty__tb_a_()}. Poof was written to encapsulate html rendering in components.

${footnote_list__div_({ ctx })}
			`.trim())
			// @formatter:on
		])
	)
	function ctx_core_catch_all__footnote__sup_() {
		return (
			footnote__sup_({
				ctx,
				id: 'ctx_core_catch_all'
			}, [
				`ctx-core has been a bit of a catch-all project to share code between projects under the principles of ctx-core. The functionality of ctx-core is in place but the packages need some reorganization & documentation is needed to be more widely used. I have used ctx-core to handle transitions between other component & state management libraries as they emerge & are updated.`
			])
		)
	}
	function nanostores_breadth_first_queue__footnote__sup_() {
		return (
			footnote__sup_({
				ctx,
				id: 'nanostores_breadth_first_queue'
			}, [
				tb_a_({ href: 'https://github.com/nanostores/nanostores/commit/af5ba274b2b400e5b0845b9a187660006faf550f' },
					'Nano Stores breadth first queue')
			])
		)
	}
	function svelte_cyclic_breadth_first_queue__footnote__sup_() {
		return (
			footnote__sup_({ ctx, id: 'svelte_cyclic_breadth_first_queue' }, [
				tb_a_({ href: 'https://github.com/sveltejs/svelte/commit/4d8090aa158bc369fc679baccb29d7e843bd5ce6' },
					'Svelte Cyclic breadth first queue')
			])
		)
	}
	function nanostores_computed_async__footnote__sup_() {
		return (
			footnote__sup_({ ctx, id: 'nanostores_computed_async' }, [
				tb_a_({ href: 'https://github.com/sveltejs/svelte/commit/4d8090aa158bc369fc679baccb29d7e843bd5ce6' },
					'Svelte Cyclic breadth first queue')
			])
		)
	}
	function rspec_nested_describes__footnote__sup_() {
		return (
			footnote__sup_({
				ctx,
				id: 'rspec_nested_describes'
			}, [
				`Rspec: Added Nested Describes: Implemented in `,
				tb_a_({
					href: 'https://github.com/dchelimsky/rspec/commit/ee2043d08fdea9a1b694fd8d3bf019b85d17ef29'
				}, `two`),
				` `,
				tb_a_({
					href: 'https://github.com/dchelimsky/rspec/commit/ee2043d08fdea9a1b694fd8d3bf019b85d17ef29'
				}, `commits`),
				`.`
			])
		)
	}
}
