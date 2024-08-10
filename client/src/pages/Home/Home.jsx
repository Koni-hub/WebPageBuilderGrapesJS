import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import { useEffect, useState } from "react";

import plugin from 'grapesjs-preset-webpage';

import BlockBasicPlugins from 'grapesjs-blocks-basic';
import formsPLugins from 'grapesjs-plugin-forms';
import ExportPlugins from 'grapesjs-plugin-export';
import ImageEditorPlugins from 'grapesjs-tui-image-editor';
import BackgroundPlugins from 'grapesjs-style-bg';

const Home = () => {
    const [, setEditor] = useState(null);

    useEffect(() => {
        const editor = grapesjs.init({
            container: "#editor",
            canvas: {
                styles: [
                    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css',
                ],
                scripts: [
                    'https://code.jquery.com/jquery-3.5.1.slim.min.js',
                    'https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js',
                    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'
                ]
            },
            plugins: [plugin, BlockBasicPlugins, formsPLugins, ExportPlugins, ImageEditorPlugins, BackgroundPlugins],
                blockManager: { 
                blocks: [
                    // Landing Page Component
                    {
                        id: "nav-bar",
                        label: `<div><h3>Header</h3></div>`,
                        content: `
                            <nav style="background-color: #333; color: white; padding: 10px 0; position: sticky; top: 0; z-index: 100;">
                                <ul style="list-style: none; margin: 0; padding: 0; display: flex; justify-content: center;">
                                    <li style="margin: 0 15px;">
                                        <a href="#home" style="color: white; text-decoration: none; font-size: 16px; font-weight: bold; padding: 14px; border-radius: 4px; transition: background 0.3s; display: inline-block;">Home</a>
                                    </li>
                                    <li style="margin: 0 15px;">
                                        <a href="#contact" style="color: white; text-decoration: none; font-size: 16px; font-weight: bold; padding: 14px; border-radius: 4px; transition: background 0.3s; display: inline-block;">Contact</a>
                                    </li>
                                    <li style="margin: 0 15px;">
                                        <a href="#support" style="color: white; text-decoration: none; font-size: 16px; font-weight: bold; padding: 14px; border-radius: 4px; transition: background 0.3s; display: inline-block;">Support</a>
                                    </li>
                                </ul>
                            </nav>
                        `,
                        category: "Landing Page Component"
                    },
                    {
                        id: "hero-section",
                        label: `<div><h3>Hero Section</h3></div>`,
                        content: `
                            <section style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background: url('https://via.placeholder.com/1600x400') center center / cover no-repeat; color: white; text-align: center; padding: 20px;">
                                <h1 style="font-size: 3.5rem; margin-bottom: 20px;">Welcome to MyWebsite</h1>
                                <p style="font-size: 1.25rem; margin-bottom: 30px; line-height: 1.6;">Your solution for awesome experiences.</p>
                                <a href="#get-started" style="display: inline-block; padding: 15px 25px; font-size: 1rem; color: #fff; background-color: #007bff; text-decoration: none; border-radius: 5px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">Get Started</a>
                            </section>
                        `,
                        category: "Landing Page Component"
                    },
                    {
                        id: "about-section",
                        label: `<div><h3>About Section</h3></div>`,
                        content: `
                            <section style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 60px 20px; background-color: #f9f9f9; color: #333; text-align: center; min-height: 100vh;">
                                <div style="max-width: 1200px; width: 100%; padding: 0 20px;">
                                    <h2 style="font-size: 3rem; font-weight: 700; margin-bottom: 20px;">About Us</h2>
                                    <p style="font-size: 1.25rem; font-weight: 400; margin-bottom: 30px; line-height: 1.6;">We are a dedicated team of professionals committed to providing top-notch solutions to meet your needs. Our mission is to deliver excellence through innovation and customer-centric approaches.</p>
                                    <img src="your-image.jpg" alt="About Us Image" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); margin-top: 20px;">
                                </div>
                            </section>
                        `,
                        category: "Landing Page Component"
                    },
                    {
                        id: "faq-section",
                        label: `<div><h3>FAQ Section</h3></div>`,
                        content: `
                            <section style="padding: 60px 20px; background-color: #fff; color: #333; text-align: center;">
                                <div style="max-width: 1200px; width: 100%; padding: 0 20px; margin: 0 auto;">
                                    <h2 style="font-size: 3rem; font-weight: 700; margin-bottom: 40px;">Frequently Asked Questions</h2>
                                    <div style="max-width: 800px; margin: 0 auto;">
                                        <button style="
                                            background-color: #eee;
                                            color: #444;
                                            cursor: pointer;
                                            padding: 18px;
                                            width: 100%;
                                            border: none;
                                            text-align: left;
                                            outline: none;
                                            font-size: 15px;
                                            transition: 0.4s;
                                        " class="accordion">Section 1</button>
                                        <div style="
                                            padding: 0 18px;
                                            background-color: white;
                                            max-height: 0;
                                            overflow: hidden;
                                            transition: max-height 0.2s ease-out;
                                        " class="panel">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        `,
                        category: "Landing Page Component"
                    },                                    
                    {
                        id: "testimonial-section",
                        label: `<div><h3>Testimonial Section</h3></div>`,
                        content: `
                            <section style="padding: 60px 20px; background-color: #fff; color: #333; text-align: center;">
                                <div style="max-width: 1200px; width: 100%; padding: 0 20px; margin: 0 auto;">
                                    <h2 style="font-size: 3rem; font-weight: 700; margin-bottom: 40px;">What Our Clients Say</h2>
                                    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
                                        <div style="flex: 1 1 300px; background: #f9f9f9; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); overflow: hidden; text-align: left;">
                                            <div style="padding: 20px; text-align: center;">
                                                <img src="client1.jpg" alt="Client 1" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; border: 3px solid #ddd; margin-bottom: 15px;">
                                                <p style="font-size: 1rem; line-height: 1.6;">“The service we received was exceptional. The team went above and beyond to ensure our needs were met, and the results were beyond our expectations.”</p>
                                                <p style="font-size: 1.125rem; font-weight: bold; margin-top: 10px;">Jane Doe</p>
                                                <p style="font-size: 0.875rem; color: #777;">CEO, Example Corp</p>
                                            </div>
                                        </div>
                                        <div style="flex: 1 1 300px; background: #f9f9f9; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); overflow: hidden; text-align: left;">
                                            <div style="padding: 20px; text-align: center;">
                                                <img src="client2.jpg" alt="Client 2" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; border: 3px solid #ddd; margin-bottom: 15px;">
                                                <p style="font-size: 1rem; line-height: 1.6;">“We were impressed with the professionalism and dedication of the team. They delivered quality work on time and within budget.”</p>
                                                <p style="font-size: 1.125rem; font-weight: bold; margin-top: 10px;">John Smith</p>
                                                <p style="font-size: 0.875rem; color: #777;">Founder, Another Company</p>
                                            </div>
                                        </div>
                                        <!-- Add more testimonials as needed -->
                                    </div>
                                </div>
                            </section>
                        `,
                        category: "Landing Page Component"
                    },                    
                    {
                        id: "service-section",
                        label: `<div><h3>Service Section</h3></div>`,
                        content: `
                            <section style="display: flex; flex-direction: column; align-items: center; padding: 40px; background-color: #fff; color: #333; text-align: center; height: auto">
                                <h2 style="font-size: 2.5rem; margin-bottom: 30px;">Our Services</h2>
                                <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
                                    <div style="flex: 1 1 300px; max-width: 300px; padding: 20px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                                        <h3 style="font-size: 1.75rem; margin-bottom: 10px;">Service One</h3>
                                        <p style="font-size: 1rem; color: #666;">Description of the first service goes here. It should be brief and informative.</p>
                                    </div>
                                    <div style="flex: 1 1 300px; max-width: 300px; padding: 20px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                                        <h3 style="font-size: 1.75rem; margin-bottom: 10px;">Service Two</h3>
                                        <p style="font-size: 1rem; color: #666;">Description of the second service goes here. It should be brief and informative.</p>
                                    </div>
                                    <div style="flex: 1 1 300px; max-width: 300px; padding: 20px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                                        <h3 style="font-size: 1.75rem; margin-bottom: 10px;">Service Three</h3>
                                        <p style="font-size: 1rem; color: #666;">Description of the third service goes here. It should be brief and informative.</p>
                                    </div>
                                </div>
                            </section>
                        `,
                        category: "Landing Page Component"
                    },
                    {
                        id: "contact-section",
                        label: `<div><h3>Contact Section</h3></div>`,
                        content: `
                            <section style="padding: 40px; background-color: #f9f9f9; color: #333; text-align: center;">
                                <h2 style="font-size: 2rem; margin-bottom: 20px;">Contact Us</h2>
                                <p style="font-size: 1.125rem; margin-bottom: 20px;">Feel free to reach out to us with any questions or concerns.</p>
                                <a href="mailto:contact@example.com" style="display: inline-block; padding: 10px 20px; font-size: 1rem; color: #fff; background-color: #007bff; text-decoration: none; border-radius: 5px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">Email Us</a>
                            </section>
                        `,
                        category: "Landing Page Component"
                    },      
                    {
                        id: "footer-section",
                        label: `<div><h3>Footer Section</h3></div>`,
                        content: `
                            <footer style="background-color: #2d3748; color: #fff;">
                                <div style="max-width: 1200px; margin: 0 auto; padding: 0px;">
                                    <div style="display: flex; gap: 50px; text-align: center;">
                                        <div style="margin-bottom: 32px;">
                                            <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 16px; text-align: left;">WebPage Builder</h3>
                                            <p style="color: #e2e8f0; width: 250px; text-align: left;">Empowering developers to create beautiful and functional user interfaces with ease.</p>
                                        </div>
                                        <div>
                                            <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 16px;">Quick Links</h4>
                                            <ul style="list-style: none; padding: 0; margin: 0; text-align: left;">
                                                <li style="margin-bottom: 8px;"><a href="/" style="color: #e2e8f0; text-decoration: none; transition: color 0.3s;">Home</a></li>
                                                <li style="margin-bottom: 8px;"><a href="#Landing Components" style="color: #e2e8f0; text-decoration: none; transition: color 0.3s;">Components</a></li>
                                                <li style="margin-bottom: 8px;"><a href="#sponsors" style="color: #e2e8f0; text-decoration: none; transition: color 0.3s;">Sponsors</a></li>
                                                <li style="margin-bottom: 8px;"><a href="#contact" style="color: #e2e8f0; text-decoration: none; transition: color 0.3s;">Contact</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 16px;">Follow Us</h4>
                                            <div style="display: flex; justify-content: center; gap: 16px;">
                                                <a href="#" style="color: #e2e8f0; text-decoration: none; transition: color 0.3s;">
                                                    <!-- Twitter Icon SVG -->
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" style="width: 24px; height: 24px; fill: currentColor;" viewBox="0 0 512 512">
                                                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                                    </svg>
                                                </a>
                                                <a href="#" style="color: #e2e8f0; text-decoration: none; transition: color 0.3s;">
                                                    <!-- GitHub Icon SVG -->
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" style="width: 24px; height: 24px; fill: currentColor;" viewBox="0 0 496 512">
                                                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                                                    </svg>
                                                </a>
                                                <a href="#" style="color: #e2e8f0; text-decoration: none; transition: color 0.3s;">
                                                    <!-- LinkedIn Icon SVG -->
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" style="width: 24px; height: 24px; fill: currentColor;" viewBox="0 0 448 512">
                                                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 16px;">Newsletter</h4>
                                            <form style="display: flex;">
                                                <input type="email" placeholder="Your email" required style="background-color: #4a5568; color: #fff; padding: 8px 16px; border: none; border-radius: 0.375rem 0 0 0.375rem; flex: 1; outline: none; box-shadow: 0 0 0 2px #3b82f6;">
                                                <button type="submit" style="background-color: #2563eb; color: #fff; padding: 8px 16px; border: none; border-radius: 0 0.375rem 0.375rem 0; cursor: pointer; transition: background-color 0.3s; font-weight: 500;">Subscribe</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div style="border-top: 1px solid #4a5568; margin-top: 32px; padding-top: 32px; text-align: center; color: #e2e8f0;">
                                        <p>© 2024 Web Page Builder. All rights reserved.</p>
                                    </div>
                                </div>
                            </footer>
                        `,
                        category: "Landing Page Component"
                    },                    
                ],
            },
        });
        
        setTimeout(() => {
            const categories = editor.BlockManager.getCategories();
    
            categories.forEach(category => {
                category.set("open", false);
            });
        }, 1000);

        setEditor(editor);
    }, []);

    return <div id="editor"></div>;
};

export default Home;