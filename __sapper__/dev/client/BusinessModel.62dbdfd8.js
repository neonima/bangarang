import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, H as validate_each_argument, v as validate_slots, y as create_component, z as claim_component, A as mount_component, n as noop, B as transition_in, C as transition_out, D as destroy_component, e as element, l as space, c as claim_element, a as children, f as detach_dev, m as claim_space, g as attr_dev, h as add_location, j as insert_dev, k as append_dev, K as check_outros, L as destroy_each, J as group_outros } from './client.06e72e0e.js';
import { L as Link, l as links } from './Link.72e73362.js';
import { V as ViewTitle } from './ViewTitle.8caca139.js';
import { D as DescriptionCard } from './DescriptionCard.3eca0b09.js';

/* src\routes\BusinessModel.svelte generated by Svelte v3.31.2 */
const file = "src\\routes\\BusinessModel.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (33:4) {#each BusinessModelValues as businessModelValue }
function create_each_block(ctx) {
	let businessvaluesection;
	let current;

	businessvaluesection = new DescriptionCard({
			props: {
				descriptionCardContract: /*businessModelValue*/ ctx[1]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(businessvaluesection.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(businessvaluesection.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(businessvaluesection, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(businessvaluesection.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(businessvaluesection.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(businessvaluesection, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(33:4) {#each BusinessModelValues as businessModelValue }",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let header;
	let viewtitle;
	let t0;
	let main;
	let t1;
	let footer;
	let link0;
	let t2;
	let link1;
	let current;

	viewtitle = new ViewTitle({
			props: { title: "Bangarang Business Model" },
			$$inline: true
		});

	let each_value = /*BusinessModelValues*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	link0 = new Link({
			props: {
				size: "small",
				linkName: "The Lean Canvas",
				linkHref: links.leanCanvas
			},
			$$inline: true
		});

	link1 = new Link({
			props: {
				size: "small",
				linkName: "Use Bangarang!",
				linkHref: links.mainMenu
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			header = element("header");
			create_component(viewtitle.$$.fragment);
			t0 = space();
			main = element("main");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t1 = space();
			footer = element("footer");
			create_component(link0.$$.fragment);
			t2 = space();
			create_component(link1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			header = claim_element(nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			claim_component(viewtitle.$$.fragment, header_nodes);
			header_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(main_nodes);
			}

			main_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			footer = claim_element(nodes, "FOOTER", { class: true });
			var footer_nodes = children(footer);
			claim_component(link0.$$.fragment, footer_nodes);
			t2 = claim_space(footer_nodes);
			claim_component(link1.$$.fragment, footer_nodes);
			footer_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(header, "class", "flex flex-col");
			add_location(header, file, 28, 0, 1818);
			attr_dev(main, "class", "flex-grow overflow-y-auto");
			add_location(main, file, 31, 0, 1912);
			attr_dev(footer, "class", "flex flex-col mb-1");
			add_location(footer, file, 36, 0, 2110);
		},
		m: function mount(target, anchor) {
			insert_dev(target, header, anchor);
			mount_component(viewtitle, header, null);
			insert_dev(target, t0, anchor);
			insert_dev(target, main, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(main, null);
			}

			insert_dev(target, t1, anchor);
			insert_dev(target, footer, anchor);
			mount_component(link0, footer, null);
			append_dev(footer, t2);
			mount_component(link1, footer, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*BusinessModelValues*/ 1) {
				each_value = /*BusinessModelValues*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(main, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(viewtitle.$$.fragment, local);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			transition_in(link0.$$.fragment, local);
			transition_in(link1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(viewtitle.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			transition_out(link0.$$.fragment, local);
			transition_out(link1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(header);
			destroy_component(viewtitle);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(main);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(footer);
			destroy_component(link0);
			destroy_component(link1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("BusinessModel", slots, []);
	

	const BusinessModelValues = [
		{
			title: "What is Banagang?",
			description: "Bangarang is an open source and free democratic claim system that allow anybody to:",
			bulletPoints: ["create a claim", "search for claims", "claiming anonymously"]
		},
		{
			title: "Definition of Bangarang",
			description: "",
			bulletPoints: [
				"Battle cry of the Lost Boys in the movie Hook.",
				"Jamaican slang defined as a hubbub, uproar, disorder, or disturbance.",
				"General exclamation meant to signify approval or amazement."
			]
		},
		{
			title: "Why this name?",
			description: "",
			bulletPoints: [
				"Individuals act like Lost Boys. They are a family within each other. They also have strong spiritual and social beliefs. Furthermore, they are hard workers and want to help not only themselves but each other.",
				"Organizations and leaders act like Pirates. They are looking for power and profit. They also have strong growth and control main beliefs. Not only that, but they are delegating work and want to help themselves and their partners.",
				"The solution must act as a disturbance of current systems by providing lead to insectioniduals. But individuals must not have more lead each other.",
				"By providing lead to individuals and guarantee this lead with equality, this should provide global amazement and systemic breakthrough"
			]
		}
	];

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<BusinessModel> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Link,
		links,
		ViewTitle,
		BusinessValueSection: DescriptionCard,
		BusinessModelValues
	});

	return [BusinessModelValues];
}

class BusinessModel extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "BusinessModel",
			options,
			id: create_fragment.name
		});
	}
}

export default BusinessModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVzaW5lc3NNb2RlbC42MmRiZGZkOC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9CdXNpbmVzc01vZGVsLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG4gICAgaW1wb3J0IExpbmsgZnJvbSBcIi4uL2NvbXBvbmVudHMvdW5pdC9MaW5rcy9MaW5rLnN2ZWx0ZVwiXHJcbiAgICBpbXBvcnQge2xpbmtzfSBmcm9tIFwiLi4vY29tcG9uZW50cy9yb3V0aW5nL2xpbmtzXCJcclxuICAgIGltcG9ydCBWaWV3VGl0bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvdW5pdC9UaXRsZXMvVmlld1RpdGxlLnN2ZWx0ZVwiXHJcbiAgICBpbXBvcnQgQnVzaW5lc3NWYWx1ZVNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdW5pdC9DYXJkcy9EZXNjcmlwdGlvbkNhcmQuc3ZlbHRlXCJcclxuICAgIGltcG9ydCB0eXBlIHsgRGVzY3JpcHRpb25DYXJkQ29udHJhY3QgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbnRlcmZhY2VzL0Rlc2NyaXB0aW9uQ2FyZENvbnRyYWN0XCI7XHJcbiAgICBjb25zdCBCdXNpbmVzc01vZGVsVmFsdWVzOkFycmF5PERlc2NyaXB0aW9uQ2FyZENvbnRyYWN0PiA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOlwiV2hhdCBpcyBCYW5hZ2FuZz9cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246XCJCYW5nYXJhbmcgaXMgYW4gb3BlbiBzb3VyY2UgYW5kIGZyZWUgZGVtb2NyYXRpYyBjbGFpbSBzeXN0ZW0gdGhhdCBhbGxvdyBhbnlib2R5IHRvOlwiLFxyXG4gICAgICAgICAgICBidWxsZXRQb2ludHM6W1wiY3JlYXRlIGEgY2xhaW1cIixcInNlYXJjaCBmb3IgY2xhaW1zXCIsXCJjbGFpbWluZyBhbm9ueW1vdXNseVwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTpcIkRlZmluaXRpb24gb2YgQmFuZ2FyYW5nXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlwiXCIsXHJcbiAgICAgICAgICAgIGJ1bGxldFBvaW50czpbXCJCYXR0bGUgY3J5IG9mIHRoZSBMb3N0IEJveXMgaW4gdGhlIG1vdmllIEhvb2suXCIsXCJKYW1haWNhbiBzbGFuZyBkZWZpbmVkIGFzIGEgaHViYnViLCB1cHJvYXIsIGRpc29yZGVyLCBvciBkaXN0dXJiYW5jZS5cIixcIkdlbmVyYWwgZXhjbGFtYXRpb24gbWVhbnQgdG8gc2lnbmlmeSBhcHByb3ZhbCBvciBhbWF6ZW1lbnQuXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOlwiV2h5IHRoaXMgbmFtZT9cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246XCJcIixcclxuICAgICAgICAgICAgYnVsbGV0UG9pbnRzOltcclxuICAgICAgICAgICAgICAgIFwiSW5kaXZpZHVhbHMgYWN0IGxpa2UgTG9zdCBCb3lzLiBUaGV5IGFyZSBhIGZhbWlseSB3aXRoaW4gZWFjaCBvdGhlci4gVGhleSBhbHNvIGhhdmUgc3Ryb25nIHNwaXJpdHVhbCBhbmQgc29jaWFsIGJlbGllZnMuIEZ1cnRoZXJtb3JlLCB0aGV5IGFyZSBoYXJkIHdvcmtlcnMgYW5kIHdhbnQgdG8gaGVscCBub3Qgb25seSB0aGVtc2VsdmVzIGJ1dCBlYWNoIG90aGVyLlwiLFxyXG4gICAgICAgICAgICAgICAgXCJPcmdhbml6YXRpb25zIGFuZCBsZWFkZXJzIGFjdCBsaWtlIFBpcmF0ZXMuIFRoZXkgYXJlIGxvb2tpbmcgZm9yIHBvd2VyIGFuZCBwcm9maXQuIFRoZXkgYWxzbyBoYXZlIHN0cm9uZyBncm93dGggYW5kIGNvbnRyb2wgbWFpbiBiZWxpZWZzLiBOb3Qgb25seSB0aGF0LCBidXQgdGhleSBhcmUgZGVsZWdhdGluZyB3b3JrIGFuZCB3YW50IHRvIGhlbHAgdGhlbXNlbHZlcyBhbmQgdGhlaXIgcGFydG5lcnMuXCIsXHJcbiAgICAgICAgICAgICAgICBcIlRoZSBzb2x1dGlvbiBtdXN0IGFjdCBhcyBhIGRpc3R1cmJhbmNlIG9mIGN1cnJlbnQgc3lzdGVtcyBieSBwcm92aWRpbmcgbGVhZCB0byBpbnNlY3Rpb25pZHVhbHMuIEJ1dCBpbmRpdmlkdWFscyBtdXN0IG5vdCBoYXZlIG1vcmUgbGVhZCBlYWNoIG90aGVyLlwiLFxyXG4gICAgICAgICAgICAgICAgXCJCeSBwcm92aWRpbmcgbGVhZCB0byBpbmRpdmlkdWFscyBhbmQgZ3VhcmFudGVlIHRoaXMgbGVhZCB3aXRoIGVxdWFsaXR5LCB0aGlzIHNob3VsZCBwcm92aWRlIGdsb2JhbCBhbWF6ZW1lbnQgYW5kIHN5c3RlbWljIGJyZWFrdGhyb3VnaFwiXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICBdO1xyXG48L3NjcmlwdD5cclxuPGhlYWRlciBjbGFzcz1cImZsZXggZmxleC1jb2xcIj5cclxuICAgIDxWaWV3VGl0bGUgdGl0bGU9XCJCYW5nYXJhbmcgQnVzaW5lc3MgTW9kZWxcIi8+XHJcbjwvaGVhZGVyPlxyXG48bWFpbiBjbGFzcz1cImZsZXgtZ3JvdyBvdmVyZmxvdy15LWF1dG9cIj5cclxuICAgIHsjZWFjaCBCdXNpbmVzc01vZGVsVmFsdWVzIGFzIGJ1c2luZXNzTW9kZWxWYWx1ZSB9XHJcbiAgICAgICAgPEJ1c2luZXNzVmFsdWVTZWN0aW9uIGRlc2NyaXB0aW9uQ2FyZENvbnRyYWN0PXtidXNpbmVzc01vZGVsVmFsdWV9Lz5cclxuICAgIHsvZWFjaH1cclxuPC9tYWluPlxyXG48Zm9vdGVyIGNsYXNzPVwiZmxleCBmbGV4LWNvbCBtYi0xXCI+XHJcbiAgICA8TGluayBzaXplPVwic21hbGxcIiBsaW5rTmFtZT1cIlRoZSBMZWFuIENhbnZhc1wiIGxpbmtIcmVmPXtsaW5rcy5sZWFuQ2FudmFzfS8+XHJcbiAgICA8TGluayAgc2l6ZT1cInNtYWxsXCIgbGlua05hbWU9XCJVc2UgQmFuZ2FyYW5nIVwiIGxpbmtIcmVmPXtsaW5rcy5tYWluTWVudX0vPlxyXG48L2Zvb3Rlcj4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29EQWtDdUQsR0FBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUQ5RCxHQUFtQjs7OztnQ0FBeEIsTUFBSTs7Ozs7Ozs7Ozs7O2NBS2tELEtBQUssQ0FBQyxVQUFVOzs7Ozs7Ozs7Y0FDaEIsS0FBSyxDQUFDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUNBTi9ELEdBQW1COzs7OytCQUF4QixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3dCQUFKLE1BQUk7Ozs7Ozs7Ozs7O2tDQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0EzQkEsbUJBQW1COztHQUVqQixLQUFLLEVBQUMsbUJBQW1CO0dBQ3pCLFdBQVcsRUFBQyxxRkFBcUY7R0FDakcsWUFBWSxHQUFFLGdCQUFnQixFQUFDLG1CQUFtQixFQUFDLHNCQUFzQjs7O0dBR3pFLEtBQUssRUFBQyx5QkFBeUI7R0FDL0IsV0FBVyxFQUFDLEVBQUU7R0FDZCxZQUFZO0lBQUUsZ0RBQWdEO0lBQUMsdUVBQXVFO0lBQUMsNkRBQTZEOzs7O0dBR3BNLEtBQUssRUFBQyxnQkFBZ0I7R0FDdEIsV0FBVyxFQUFDLEVBQUU7R0FDZCxZQUFZO0lBQ1Isa05BQWtOO0lBQ2xOLHVPQUF1TztJQUN2TyxxSkFBcUo7SUFDckosd0lBQXdJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
