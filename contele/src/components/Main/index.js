import React, { Component } from 'react';
import './styles.css';
export default class Main extends Component {
    render() {
        return <div className="container conteudo">
            <form method="get" action="http://127.0.0.1:8000/clientes">
        <div class="row">
            <div class="col">
                <h1>Contact Information:</h1>
                <input type="text" id="fname" name="fname" placeholder="First Name:" required/>
                <input type="text" id="lname" name="lname" placeholder="Last Name:" required/> <br/>
                <input type="email" id="email" name="email" placeholder="Email Address:" required/>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{6,12}$" placeholder="Phone:" title="Six or more characters" required/> <br/>
                <input list="languages" name="language" id="language" placeholder="Language:" class="ucol" required/>
                <datalist id="languages">
                    <option value="Afrikaans">Afrikaans</option>
                    <option value="Albanian">Albanian</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Armenian">Armenian</option>
                    <option value="Basque">Basque</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Bulgarian">Bulgarian</option>
                    <option value="Catalan">Catalan</option>
                    <option value="Cambodian">Cambodian</option>
                    <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
                    <option value="Croatian">Croatian</option>
                    <option value="Czech">Czech</option>
                    <option value="Danish">Danish</option>
                    <option value="Dutch">Dutch</option>
                    <option value="English">English</option>
                    <option value="Estonian">Estonian</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finnish">Finnish</option>
                    <option value="French">French</option>
                    <option value="Georgian">Georgian</option>
                    <option value="German">German</option>
                    <option value="Greek">Greek</option>
                    <option value="Gujarati">Gujarati</option>
                    <option value="Hebrew">Hebrew</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Hungarian">Hungarian</option>
                    <option value="Icelandic">Icelandic</option>
                    <option value="Indonesian">Indonesian</option>
                    <option value="Irish">Irish</option>
                    <option value="Italian">Italian</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Javanese">Javanese</option>
                    <option value="Korean">Korean</option>
                    <option value="Latin">Latin</option>
                    <option value="Latvian">Latvian</option>
                    <option value="Lithuanian">Lithuanian</option>
                    <option value="Macedonian">Macedonian</option>
                    <option value="Malay">Malay</option>
                    <option value="Malayalam">Malayalam</option>
                    <option value="Maltese">Maltese</option>
                    <option value="Maori">Maori</option>
                    <option value="Marathi">Marathi</option>
                    <option value="Mongolian">Mongolian</option>
                    <option value="Nepali">Nepali</option>
                    <option value="Norwegian">Norwegian</option>
                    <option value="Persian">Persian</option>
                    <option value="Polish">Polish</option>
                    <option value="Portuguese">Portuguese</option>
                    <option value="Punjabi">Punjabi</option>
                    <option value="Quechua">Quechua</option>
                    <option value="Romanian">Romanian</option>
                    <option value="Russian">Russian</option>
                    <option value="Samoan">Samoan</option>
                    <option value="Serbian">Serbian</option>
                    <option value="Slovak">Slovak</option>
                    <option value="Slovenian">Slovenian</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Swahili">Swahili</option>
                    <option value="Swedish ">Swedish </option>
                    <option value="Tamil">Tamil</option>
                    <option value="Tatar">Tatar</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Thai">Thai</option>
                    <option value="Tibetan">Tibetan</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Turkish">Turkish</option>
                    <option value="Ukrainian">Ukrainian</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Uzbek">Uzbek</option>
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="Welsh">Welsh</option>
                    <option value="Xhosa">Xhosa</option>
                </datalist>
                <input list="countrys" name="country" class="datalist-input" placeholder="Country:" class="ucol" required/>
                <datalist id="countrys">
                    <option value="Afghanistan" />
                    <option value="Albania" />
                    <option value="Algeria" />
                    <option value="American Samoa" />
                    <option value="Andorra" />
                    <option value="Angola" />
                    <option value="Anguilla" />
                    <option value="Antarctica" />
                    <option value="Antigua and Barbuda" />
                    <option value="Argentina" />
                    <option value="Armenia" />
                    <option value="Aruba" />
                    <option value="Australia" />
                    <option value="Austria" />
                    <option value="Azerbaijan" />
                    <option value="Bahamas" />
                    <option value="Bahrain" />
                    <option value="Bangladesh" />
                    <option value="Barbados" />
                    <option value="Belarus" />
                    <option value="Belgium" />
                    <option value="Belize" />
                    <option value="Benin" />
                    <option value="Bermuda" />
                    <option value="Bhutan" />
                    <option value="Bolivia" />
                    <option value="Bosnia and Herzegovina" />
                    <option value="Botswana" />
                    <option value="Bouvet Island" />
                    <option value="Brazil" />
                    <option value="British Indian Ocean Territory" />
                    <option value="Brunei Darussalam" />
                    <option value="Bulgaria" />
                    <option value="Burkina Faso" />
                    <option value="Burundi" />
                    <option value="Cambodia" />
                    <option value="Cameroon" />
                    <option value="Canada" />
                    <option value="Cape Verde" />
                    <option value="Cayman Islands" />
                    <option value="Central African Republic" />
                    <option value="Chad" />
                    <option value="Chile" />
                    <option value="China" />
                    <option value="Christmas Island" />
                    <option value="Cocos (Keeling) Islands" />
                    <option value="Colombia" />
                    <option value="Comoros" />
                    <option value="Congo" />
                    <option value="Congo, The Democratic Republic of The" />
                    <option value="Cook Islands" />
                    <option value="Costa Rica" />
                    <option value="Cote D'ivoire" />
                    <option value="Croatia" />
                    <option value="Cuba" />
                    <option value="Cyprus" />
                    <option value="Czech Republic" />
                    <option value="Denmark" />
                    <option value="Djibouti" />
                    <option value="Dominica" />
                    <option value="Dominican Republic" />
                    <option value="Ecuador" />
                    <option value="Egypt" />
                    <option value="El Salvador" />
                    <option value="Equatorial Guinea" />
                    <option value="Eritrea" />
                    <option value="Estonia" />
                    <option value="Ethiopia" />
                    <option value="Falkland Islands (Malvinas)" />
                    <option value="Faroe Islands" />
                    <option value="Fiji" />
                    <option value="Finland" />
                    <option value="France" />
                    <option value="French Guiana" />
                    <option value="French Polynesia" />
                    <option value="French Southern Territories" />
                    <option value="Gabon" />
                    <option value="Gambia" />
                    <option value="Georgia" />
                    <option value="Germany" />
                    <option value="Ghana" />
                    <option value="Gibraltar" />
                    <option value="Greece" />
                    <option value="Greenland" />
                    <option value="Grenada" />
                    <option value="Guadeloupe" />
                    <option value="Guam" />
                    <option value="Guatemala" />
                    <option value="Guinea" />
                    <option value="Guinea-bissau" />
                    <option value="Guyana" />
                    <option value="Haiti" />
                    <option value="Heard Island and Mcdonald Islands" />
                    <option value="Holy See (Vatican City State)" />
                    <option value="Honduras" />
                    <option value="Hong Kong" />
                    <option value="Hungary" />
                    <option value="Iceland" />
                    <option value="India" />
                    <option value="Indonesia" />
                    <option value="Iran, Islamic Republic of" />
                    <option value="Iraq" />
                    <option value="Ireland" />
                    <option value="Israel" />
                    <option value="Italy" />
                    <option value="Jamaica" />
                    <option value="Japan" />
                    <option value="Jordan" />
                    <option value="Kazakhstan" />
                    <option value="Kenya" />
                    <option value="Kiribati" />
                    <option value="Korea, Democratic People's Republic of" />
                    <option value="Korea, Republic of" />
                    <option value="Kuwait" />
                    <option value="Kyrgyzstan" />
                    <option value="Lao People's Democratic Republic" />
                    <option value="Latvia" />
                    <option value="Lebanon" />
                    <option value="Lesotho" />
                    <option value="Liberia" />
                    <option value="Libyan Arab Jamahiriya" />
                    <option value="Liechtenstein" />
                    <option value="Lithuania" />
                    <option value="Luxembourg" />
                    <option value="Macao" />
                    <option value="Macedonia, The Former Yugoslav Republic of" />
                    <option value="Madagascar" />
                    <option value="Malawi" />
                    <option value="Malaysia" />
                    <option value="Maldives" />
                    <option value="Mali" />
                    <option value="Malta" />
                    <option value="Marshall Islands" />
                    <option value="Martinique" />
                    <option value="Mauritania" />
                    <option value="Mauritius" />
                    <option value="Mayotte" />
                    <option value="Mexico" />
                    <option value="Micronesia, Federated States of" />
                    <option value="Moldova, Republic of" />
                    <option value="Monaco" />
                    <option value="Mongolia" />
                    <option value="Montserrat" />
                    <option value="Morocco" />
                    <option value="Mozambique" />
                    <option value="Myanmar" />
                    <option value="Namibia" />
                    <option value="Nauru" />
                    <option value="Nepal" />
                    <option value="Netherlands" />
                    <option value="Netherlands Antilles" />
                    <option value="New Caledonia" />
                    <option value="New Zealand" />
                    <option value="Nicaragua" />
                    <option value="Niger" />
                    <option value="Nigeria" />
                    <option value="Niue" />
                    <option value="Norfolk Island" />
                    <option value="Northern Mariana Islands" />
                    <option value="Norway" />
                    <option value="Oman" />
                    <option value="Pakistan" />
                    <option value="Palau" />
                    <option value="Palestinian Territory, Occupied" />
                    <option value="Panama" />
                    <option value="Papua New Guinea" />
                    <option value="Paraguay" />
                    <option value="Peru" />
                    <option value="Philippines" />
                    <option value="Pitcairn" />
                    <option value="Poland" />
                    <option value="Portugal" />
                    <option value="Puerto Rico" />
                    <option value="Qatar" />
                    <option value="Reunion" />
                    <option value="Romania" />
                    <option value="Russian Federation" />
                    <option value="Rwanda" />
                    <option value="Saint Helena" />
                    <option value="Saint Kitts and Nevis" />
                    <option value="Saint Lucia" />
                    <option value="Saint Pierre and Miquelon" />
                    <option value="Saint Vincent and The Grenadines" />
                    <option value="Samoa" />
                    <option value="San Marino" />
                    <option value="Sao Tome and Principe" />
                    <option value="Saudi Arabia" />
                    <option value="Senegal" />
                    <option value="Serbia and Montenegro" />
                    <option value="Seychelles" />
                    <option value="Sierra Leone" />
                    <option value="Singapore" />
                    <option value="Slovakia" />
                    <option value="Slovenia" />
                    <option value="Solomon Islands" />
                    <option value="Somalia" />
                    <option value="South Africa" />
                    <option value="South Georgia and The South Sandwich Islands" />
                    <option value="Spain" />
                    <option value="Sri Lanka" />
                    <option value="Sudan" />
                    <option value="Suriname" />
                    <option value="Svalbard and Jan Mayen" />
                    <option value="Swaziland" />
                    <option value="Sweden" />
                    <option value="Switzerland" />
                    <option value="Syrian Arab Republic" />
                    <option value="Taiwan, Province of China" />
                    <option value="Tajikistan" />
                    <option value="Tanzania, United Republic of" />
                    <option value="Thailand" />
                    <option value="Timor-leste" />
                    <option value="Togo" />
                    <option value="Tokelau" />
                    <option value="Tonga" />
                    <option value="Trinidad and Tobago" />
                    <option value="Tunisia" />
                    <option value="Turkey" />
                    <option value="Turkmenistan" />
                    <option value="Turks and Caicos Islands" />
                    <option value="Tuvalu" />
                    <option value="Uganda" />
                    <option value="Ukraine" />
                    <option value="United Arab Emirates" />
                    <option value="United Kingdom" />
                    <option value="United States" />
                    <option value="United States Minor Outlying Islands" />
                    <option value="Uruguay" />
                    <option value="Uzbekistan" />
                    <option value="Vanuatu" />
                    <option value="Venezuela" />
                    <option value="Viet Nam" />
                    <option value="Virgin Islands, British" />
                    <option value="Virgin Islands, U.S" />
                    <option value="Wallis and Futuna" />
                    <option value="Western Sahara" />
                    <option value="Yemen" />
                    <option value="Zambia" />
                    <option value="Zimbabwe" />
                </datalist>
            </div>
            <div class="col">
                <h1>Shipping Address:</h1>
                <input type="text" id="address" name="address" placeholder="Address Line 1:" class="address" required/><br/>
                <input type="text" id="address2" name="address2" placeholder="Address Line 2:" class="address" required/><br/>
                <input list="cities" name="cities" class="datalist-input" placeholder="City:" class="sized" required/>
                <datalist id="cities">
                    <option value=" "></option>
                </datalist>
                <input list="states" name="state" class="datalist-input" placeholder="State:" class="sized" required/>
                <datalist id="states">
                <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </datalist>
                <input list="zips" name="zip" class="datalist-input" placeholder="Zip code:" class="sized" required/>
                <datalist id="zips">
                    <option value=" "></option>
                </datalist>
            </div>
        </div>
        <div class="row">
            <div class="col">
            <h1>Billing Address:</h1>
                <input type="text" id="addressb" name="addressb" placeholder="Address Line 1:" class="address2" required/><br/>
                <input type="text" id="addressb2" name="addressb2" placeholder="Address Line 2:" class="address2" required/><br/>
                <input list="cities" name="cities2" class="datalist-input" placeholder="City:" class="sized2" required/>
                <input list="states" name="state2" class="datalist-input" placeholder="State:" class="sized2" required/>
                <input list="zips" name="zip2" class="datalist-input" placeholder="Zip code:" class="sized2" required/><br/>
                <input type="checkbox" id="check1" name="check1" />
                <label for="check1"> Use shipping addres same as billing addres</label>
            </div>
            <div class="col">
                <h1>Check the boxes below:</h1>
                <input type="checkbox" id="check2" name="check2" />
                <label for="check2"> Does any vehicle need to be equiped with a fuel cut off device?</label>
                <input type="checkbox" id="check3" name="check3" />
                <label for="check3"> Will any trackers be installed on a bike, truck or machinery?</label>
                <input type="checkbox" id="check4" name="check4" />
                <label for="check4"> Will you need to identify the fleet drivers?</label><br/>
                <input type="number" id="many" name="many" placeholder="How many trackers would you like to purchase?" min="1" class="address" required/><br/>
                
            </div>
            <input type="submit" value="Order now"/>
        </div>
        
            </form>
</div>
    }
}