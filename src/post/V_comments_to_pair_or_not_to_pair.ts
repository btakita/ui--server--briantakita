import { H_ } from '@btakita/domain--all--blog'
import { type Ctx } from '@ctx-core/object'
import { VanShape } from 'van-type-delegate'
import './Comments_to_pair_or_not_to_pair.css'
export function V_comments_to_pair_or_not_to_pair<V extends VanShape>({ ctx }:{ ctx:Ctx }) {
	const {
		a,
		atb,
		div,
		em,
		h3,
		img,
		li,
		p,
		span,
		ul
	} = H_<V>(ctx)
	return (
		div({ id: 'comments' },
			h3(
				'3 Comments',
			),
			ul(
				li(
					div({ class: 'gravatar' },
						img(
							{ alt: '', src: 'http://www.gravatar.com/avatar/d5fa38c6dc1cd61b01397e11b30425d7', class: 'avatar avatar-50 photo', height: '50', width: '50' }),
					),
					div({ class: 'comment' },
						span({ class: 'commentauthor' },
							a({ href: 'https://web.archive.org/web/20120513132750/http://40withegg.com/', rel: 'external nofollow', class: 'url' },
								'Joe Moore',
							),
							' says...',
						),
						span({ class: 'commentdate' },
							'Comment on March 10, 2010 at 7:55 am',
						),
						div({ class: 'commenttext' },
							p(
								'Keep us posted as to how your move away from pair programming fairs. For example, if you find that morebugs are introduced and thus the soloing benefits are canceled out… or if that ',
								em(
									'doesn’t',
								),
								' happen,too.',
							),
						),
					),
				),
				li(
					div({ class: 'gravatar' },
						img(
							{ alt: '', src: 'http://www.gravatar.com/avatar/2475563a3ba1da4018af64f964ab45b0', class: 'avatar avatar-50 photo', height: '50', width: '50' }),
					),
					div({ class: 'comment' },
						span({ class: 'commentauthor' },
							atb({ href: 'http://thewoolleyweb.com/', rel: 'external nofollow', class: 'url' },
								'Chad Woolley',
							),
							' says...',
						),
						span({ class: 'commentdate' },
							'Comment on March 10, 2010 at 8:08 pm',
						),
						div({ class: 'commenttext' },
							p(
								'But who’s gonna call YAGNI on you, Brian?',
							),
							p(
								'Not that You’re Ever Gonna Need That',
								img({ src: '/assets/images/icon_wink.gif', alt: ';)', class: 'wp-smiley' }),
							),
							p(
								'– Chad',
							),
						),
					),
				),
				li(
					div({ class: 'gravatar' },
						img(
							{ alt: '', src: 'http://www.gravatar.com/avatar/10dcd7cf4ff4b679c284cedf7be4f68f', class: 'avatar avatar-50 photo', height: '50', width: '50' }),
					),
					div({ class: 'comment' },
						span({ class: 'commentauthor' },
							atb(
								{ href: 'https://web.archive.org/web/20120513132750/http://www.honk.com/', rel: 'external nofollow', class: 'url' },
								'Brian',
							),
							' says...',
						),
						span({ class: 'commentdate' },
							'Comment on March 23, 2010 at 9:27 am',
						),
						div({ class: 'commenttext' },
							p(
								'Thanks. Yeah, I still need YAGNI at times ',
								img({ src: '/assets/images/icon_smile.gif', alt: ':-)', class: 'wp-smiley' }),
								'.',
							),
							p(
								'The developers here seem to like the autonomy. We are still in an open workspace and we talk to eachother regarding our changes.',
							),
							p(
								'I’m not sure yet what effect this has on our velocity and defect rate. The types of changes vary frommajor release to major release.',
							),
							p(
								'There have not been major issues (that I’m aware of) due to lack of pairing so far. Our history ofpairing has helped in giving us a unified development direction/idioms.',
							),
							p(
								'One side-note, we have an awesome pair here from Blazing Cloud (Jen-Mei Wu and Ali Crockett). Jen-Meiis an experienced Rubyist and Ali is new to Ruby but experienced in other technologies.',
							),
							p(
								'Pairing totally makes sense here as the knowledge transfer is high and it better enables developers tobe productive on a new codebase.',
							),
						),
					),
				),
			),
		)
	)
}
