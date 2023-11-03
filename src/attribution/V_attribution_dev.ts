import { V_atb, V_attribution } from '@btakita/ui--server--blog'
import { type Ctx } from '@ctx-core/object'
export function V_attribution_dev({ ctx }:{ ctx:Ctx }) {
	return (
		V_attribution({
			ctx,
			attribution_id: '/assets/images/dev.svg'
		},
			V_atb({ ctx, href: 'https://github.com/satnaing/astro-paper' },
				'Astro Paper'),
			'—',
			V_atb({ ctx, href: 'https://github.com/satnaing/astro-paper/blob/main/LICENSE' },
				'MIT License'))
	)
}
