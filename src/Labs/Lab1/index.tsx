export default function Lab1() {
    return(
        <div id="wd-lab1">
            <h2>Lab 1</h2>
            <h3>HTML Examples</h3>
            <div id="wd-h-tag">
                <h4>Heading Tags</h4>
Text documents are often broken up into several sections and subsections. 
Each section is usually prefaced with a short title or heading that attempts 
to summarize the topic of the section it precedes. For instance this 
paragraph is preceded by the heading Heading Tags. The font of the section 
headings are usually larger and bolder than their subsection headings. 
This document uses headings to introduce topics such as HTML Documents, 
HTML Tags, Heading Tags, etc. HTML heading tags can be used to format 
plain text so that it renders in a browser as large headings. There are 6 
heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the 
largest heading and h6 is the smallest heading.
            </div>
            <div id="wd-p-tag">
                <h4>Paragraph Tag</h4>
                    <p id="wd-p-1">
This is a paragraph. We often separate a long set of sentences with vertical 
spaces to make the text easier to read. Browsers ignore vertical white spaces 
and render all the text as one single set of sentences. To force the browser 
to add vertical spacing, wrap the paragraphs you want to separate with the 
paragraph tag
                    </p>
                    <p id="wd-p-2">
This is the first paragraph. The paragraph tag is used to format
vertical gaps between long pieces of text like this one.
                    </p>
                    <p id="wd-p-3">
This is the second paragraph. Even though there is a deliberate white
gap between the paragraph above and this paragraph, by default
browsers render them as one contiguous piece of text as shown here on
the right.
                    </p>
                    <p id="wd-p-4">
This is the third paragraph. Wrap each paragraph with the paragraph
tag to tell browsers to render the gaps.
                    </p>
            </div>
            <div id="wd-lists">
                <h4>List Tags</h4>
                <h5>Ordered List Tags</h5>
                How to make pancakes:
                <ol id="wd-pancakes">
                <li>Mix dry ingredients.</li>
                <li>Add wet ingredients.</li>
                <li>Stir to combine.</li>
                <li>Heat a skillet or griddle.</li>
                <li>Pour batter onto the skillet.</li>
                <li>Cook until bubbly on top.</li>
                <li>Flip and cook the other side.</li>
                <li>Serve and enjoy!</li>
                </ol>
                My favorite recipe:
                <ol id="wd-your-favorite-recipe">
                    <li>Remove ribeye from fridge and rest on counter for 1 hour</li>
                    <li>Salt ribeye to taste</li>
                    <li>Heat large pan on maximum heat until HOT</li>
                    <li>Add 1 tbs butter to a pan</li>
                    <li>After butter melts, add ribeye to pan</li>
                    <li>Sear for 4 minutes</li>
                    <li>Flip ribeye</li>
                    <li>Sear an additional 3-4 minute (to preference)</li>
                    <li>Remove from pan and turn off heat</li>
                    <li>Rest for 5 minutes under tinfoil before serving</li>
                </ol>
                My favorite books (in no particular order)
                <ul id="wd-my-books">
                    <li>The Inheritance Cycle</li>
                    <li>The Lord of the Rings Trilogy (+ Hobbit)</li>
                    <li>Harry Potter Series</li>
                </ul>
            </div>
            <div id="wd-tables">
                <h4>Table Tag</h4>
                <table border={1} width="100%">
                    <thead>
                        <tr>
                            <th>Quiz</th>
                            <th>Topic</th>
                            <th>Date</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Q1</td>
                            <td>HTML</td>
                            <td>9/19/24</td>
                            <td>85</td>
                        </tr>
                        <tr>
                            <td>Q2</td>
                            <td>CSS</td>
                            <td>9/26/24</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q3</td>
                            <td>JavaScript</td>
                            <td>10/3/24</td>
                            <td>95</td>
                        </tr>
                        <tr>
                            <td>Q4</td>
                            <td>CSS2</td>
                            <td>10/10/24</td>
                            <td>97</td>
                        </tr>
                        <tr>
                            <td>A1-A3</td>
                            <td>Node</td>
                            <td>10/17/24</td>
                            <td>83</td>
                        </tr>
                        <tr>
                            <td>Redux</td>
                            <td>JavaScript</td>
                            <td>10/31/24</td>
                            <td>93</td>
                        </tr>
                        <tr>
                            <td>Redux2</td>
                            <td>JavaScript</td>
                            <td>11/7/24</td>
                            <td>87</td>
                        </tr>
                        <tr>
                            <td>Node</td>
                            <td>JavaScript</td>
                            <td>11/14/24</td>
                            <td>95</td>
                        </tr>
                        <tr>
                            <td>Node2</td>
                            <td>JavaScript</td>
                            <td>11/21/24</td>
                            <td>75</td>
                        </tr>
                        <tr>
                            <td>Mongo</td>
                            <td>JavaScript</td>
                            <td>12/5/24</td>
                            <td>100</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>Average</td>
                            <td>90</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div id="wd-images">
                <h4>Image tag</h4>
                Loading an image from the internet:
                <br />
                <img id="wd-strship"
                    width="400px"
                    src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
                    />
                <br />
                Loading a local image:
                <br />
                <img id="wd-teslabot" src="images/teslabot.jpg" height="200px" />
            </div>
            <div id="wd-forms">
                <h4>Form Elements</h4>
                <form id="wd-text-fields">
                    <h5>Text Fields</h5>
                    <label htmlFor="wd-text-fields-username">Username:</label>
                    <input id="wd-text-fields-username" placeholder="jdoe" /> <br />
                    <label htmlFor="wd-text-fields-password">Password:</label>
                    <input type="password" id="wd-text-fields-password" value="123@#$asd" /> <br />
                    <label htmlFor="wd-text-fields-first-name">First name:</label>
                    <input type="text" id="wd-text-fields-first-name" title="John" /> <br />
                    <label htmlFor="wd-text-fields-last-name">Last name:</label>
                    <input type="text" id="wd-text-fields-last-name" placeholder="Doe" 
                            value="Wonderland" title="The last name" />
                </form>
            </div>
            <div id="wd-text-area">
                <h5>Text boxes</h5>
                <label>Biography</label><br/>
                <textarea id="wd-textarea" cols={30} rows={10}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui 
                officia deserunt mollit anim id est laborum.
                </textarea>
            </div>
            <div id="wd-types-of-buttons">
                <h5 id="wd-buttons">Buttons</h5>
                <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
                    Hello World!
                </button>
                <h5>File uploads</h5>
                <input id="wd-upload" type="file"/>
                <h5 id="wd-radio-buttons">Radio buttons</h5>

                <label>Favorite movie genre:</label><br />

                <input type="radio" name="radio-genre" id="wd-radio-comedy"/>
                <label htmlFor="wd-radio-comedy">Comedy</label><br />

                <input type="radio" name="radio-genre" id="wd-radio-drama"/>
                <label htmlFor="wd-radio-drama">Drama</label><br />

                <input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
                <label htmlFor="wd-radio-fantasy">Fantasy</label>

                <h5 id="wd-checkboxes">Checkboxes</h5>
                <label>Favorite movie genre:</label><br />

                <input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
                <label htmlFor="wd-chkbox-comedy">Comedy</label><br/>

                <input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
                <label htmlFor="wd-chkbox-drama">Drama</label><br/>

                <input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
                <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>

                <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
                <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
            </div>
            <div id="wd-dropdown-menus">
                <h4 id="wd-dropdowns">Dropdowns</h4>

                <h5>Select one</h5>
                <label htmlFor="wd-select-one-genre">Favorite movie genre:</label><br/>
                <select id="wd-select-one-genre">
                    <option value="COMEDY">Comedy</option>
                    <option value="DRAMA">Drama</option>
                    <option selected value="SCIFI">Science Fiction</option>
                    <option value="FANTASY">Fantasy</option>
                </select>

                <h5>Select many</h5>
                <label htmlFor="wd-select-many-genre">Favorite movie genres:</label><br/>
                <select id="wd-select-many-genre" multiple>
                    <option selected value="COMEDY">Comedy</option>
                    <option value="DRAMA">Drama</option>
                    <option selected value="SCIFI">Science Fiction</option>
                    <option value="FANTASY">Fantasy</option>
                </select>
            </div>
            <div id="wd-other-html-field-types">
                <h4>Other HTML field types</h4>

                <label htmlFor="wd-text-fields-email">Email:</label>
                <input type="email" 
                    placeholder="jdoe@somewhere.com" 
                    id="wd-text-fields-email"/><br/>
                
                <label htmlFor="wd-text-fields-salary-start">Starting salary:</label>
                <input type="number" 
                    id="wd-text-fields-salary-start" 
                    placeholder="1000"
                    value="100000"
                    min="1000"
                    max="1000000"
                    /><br/>
                
                <label htmlFor="wd-text-fields-rating">Rating:</label>
                <input type="range" 
                    id="wd-text-fields-rating"
                    placeholder="Doe"
                    max="5"
                    defaultValue="4"/><br/>

                <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
                <input type="date"
                    id="wd-text-fields-dob"
                    defaultValue="2000-01-21"/><br/>
            </div>
            <div id="wd-hyperlinks">
                <h4>Anchor tag</h4>
                Please
                <a id="wd-lipsum" href="https://www.lipsum.com">click here</a>
                to get dummy text<br/>

                <h4>GitHub Tag</h4>
                Please 
                <a id="wd-github" href="https://github.com/JonathanOckert/kanbas-react-web-app">
                     click here </a>
                to navigate to the GitHub repository for the Kanbas project<br/>
            </div>
        </div>
    )
}