import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, y as create_component, l as space, c as claim_element, a as children, z as claim_component, f as detach_dev, m as claim_space, g as attr_dev, h as add_location, j as insert_dev, A as mount_component, k as append_dev, n as noop, B as transition_in, C as transition_out, D as destroy_component } from './client.2fdb028b.js';
import { L as Link, l as links } from './Link.cbb58840.js';
import { V as ViewTitle } from './ViewTitle.5d3fba97.js';

/* src\routes\EarlyAdoptersAgileTeamMember.svelte generated by Svelte v3.31.2 */
const file = "src\\routes\\EarlyAdoptersAgileTeamMember.svelte";

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
			props: { title: "AGILE TEAM MEMBER EARLY ADOPTER" },
			$$inline: true
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
			add_location(header, file, 4, 0, 273);
			attr_dev(main, "class", "flex-grow overflow-y-auto");
			add_location(main, file, 7, 0, 374);
			attr_dev(footer, "class", "flex flex-col");
			add_location(footer, file, 10, 0, 427);
		},
		m: function mount(target, anchor) {
			insert_dev(target, header, anchor);
			mount_component(viewtitle, header, null);
			insert_dev(target, t0, anchor);
			insert_dev(target, main, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, footer, anchor);
			mount_component(link0, footer, null);
			append_dev(footer, t2);
			mount_component(link1, footer, null);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(viewtitle.$$.fragment, local);
			transition_in(link0.$$.fragment, local);
			transition_in(link1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(viewtitle.$$.fragment, local);
			transition_out(link0.$$.fragment, local);
			transition_out(link1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(header);
			destroy_component(viewtitle);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(main);
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
	validate_slots("EarlyAdoptersAgileTeamMember", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<EarlyAdoptersAgileTeamMember> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Link, links, ViewTitle });
	return [];
}

class EarlyAdoptersAgileTeamMember extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "EarlyAdoptersAgileTeamMember",
			options,
			id: create_fragment.name
		});
	}
}

export default EarlyAdoptersAgileTeamMember;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWFybHlBZG9wdGVyc0FnaWxlVGVhbU1lbWJlci5kOTdkY2JmZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9FYXJseUFkb3B0ZXJzQWdpbGVUZWFtTWVtYmVyLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG4gICAgaW1wb3J0IExpbmsgZnJvbSBcIi4uL2NvbXBvbmVudHMvdW5pdC9MaW5rcy9MaW5rLnN2ZWx0ZVwiXHJcbiAgICBpbXBvcnQgeyBsaW5rcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL3JvdXRpbmcvbGlua3NcIjtcclxuICAgIGltcG9ydCBWaWV3VGl0bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvdW5pdC9UaXRsZXMvVmlld1RpdGxlLnN2ZWx0ZVwiXHJcbjwvc2NyaXB0PlxyXG48aGVhZGVyIGNsYXNzPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgPFZpZXdUaXRsZSB0aXRsZT1cIkFHSUxFIFRFQU0gTUVNQkVSIEVBUkxZIEFET1BURVJcIi8+XHJcbjwvaGVhZGVyPlxyXG48bWFpbiBjbGFzcz1cImZsZXgtZ3JvdyBvdmVyZmxvdy15LWF1dG9cIj5cclxuXHJcbjwvbWFpbj5cclxuPGZvb3RlciBjbGFzcz1cImZsZXggZmxleC1jb2xcIj5cclxuICAgIDxMaW5rIHNpemU9XCJzbWFsbFwiIGxpbmtOYW1lPVwiVGhlIExlYW4gQ2FudmFzXCIgbGlua0hyZWY9e2xpbmtzLmxlYW5DYW52YXN9Lz5cclxuICAgIDxMaW5rIHNpemU9XCJzbWFsbFwiIGxpbmtOYW1lPVwiVXNlIEJhbmdhcmFuZyFcIiBsaW5rSHJlZj17bGlua3MubWFpbk1lbnV9Lz5cclxuPC9mb290ZXI+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0FZNEQsS0FBSyxDQUFDLFVBQVU7Ozs7Ozs7OztjQUNqQixLQUFLLENBQUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
