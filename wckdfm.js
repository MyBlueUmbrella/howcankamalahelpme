var conditionsDict = {};

// Add key-value pairs to the dictionary
conditionsDict["senior"] = {"kamala": `
<ul class="space-y-6">
            <li class="flex flex-col gap-2">
                <b class="text-lg font-semibold">Increase Social Security Benefits:</b>
                <p class="text-base">
                    Kamala Harris wants to boost Social Security benefits to help seniors feel more financially secure. 
                    This means raising the benefits and adjusting them for inflation so they keep up with the rising cost of living.
                    <a href="https://kamalaharris.org/issues/social-security/" class="text-blue-500 hover:underline">[🔗]</a>
                </p>
            </li>

            <li class="flex flex-col gap-2">
                <b class="text-lg font-semibold">Expand Home and Community-Based Care:</b>
                <p class="text-base">
                    Kamala Harris plans to put more money into home and community care services, so seniors can get help at home instead of in a facility.
                    This includes more funding for caregiving programs and support services.
                    <a href="https://www.harris.senate.gov/about/policies" class="text-blue-500 hover:underline">[🔗]</a>
                </p>
            </li>

            <li class="flex flex-col gap-2">
                <b class="text-lg font-semibold">Better Medical Care for Seniors:</b>
                <p class="text-base">
                    Kamala Harris wants to fund programs for doctors, nurses, and health care providers to train on geriatric-specific issues and care,
                    so that you have the best medical care possible.
                    <a href="https://www.hhs.gov/about/news/2024/07/01/biden-harris-administration-invests-over-200-million-help-primary-care-doctors-nurses-other-health-care-providers-improve-care-older-adults.html" class="text-blue-500 hover:underline">[🔗]</a>
                </p>
            </li>
        </ul>
`, "trump": `
<ul class="space-y-6">
            <li class="flex flex-col gap-2">
                <b class="text-lg font-semibold">Proposed Cuts to Social Security:</b>
                <p class="text-base text-gray-700">
                    Donald Trump has supported proposals to cut Social Security benefits and has suggested reducing the program’s funding. 
                    Critics argue that these cuts would undermine financial security for seniors who rely on Social Security for their retirement income.
                    <a href="https://www.cnbc.com/2020/09/01/trump-signaled-he-would-cut-social-security.html" class="text-blue-500 hover:underline">[🔗]</a>
                </p>
            </li>
            
            <li class="flex flex-col gap-2">
                <b class="text-lg font-semibold">Failure to Address Prescription Drug Costs:</b>
                <p class="text-base text-gray-700">
                    Despite promises to lower prescription drug prices, Trump's administration did not advance significant measures to reduce costs for seniors. 
                    The lack of comprehensive action on this issue left many seniors facing high out-of-pocket expenses for their medications.
                    <a href="https://www.politico.com/news/2020/06/04/trump-prescription-drug-prices-295044" class="text-blue-500 hover:underline">[🔗]</a>
                </p>
            </li>
        </ul>
`};

conditionsDict["millenial"] = {"kamala": `
<ul class="space-y-4">
            <li class="text-base">
                <b class="text-lg font-semibold">Improve Student Loan Relief:</b>
                Kamala Harris will address student loan debt by forgiving or canceling part of the student loan debt and simplifying repayment options. 
                <a href="https://kamalaharris.org/issues/student-loan-debt/" class="text-blue-500 hover:underline">[🔗]</a>
            </li>

            <li class="text-base">
                <b class="text-lg font-semibold">Expand Access to Affordable Higher Education:</b>
                Kamala Harris wants to make college more affordable by giving more money for Pell Grants and offering free community college. This will help reduce future student debt and make college more accessible. 
                <a href="https://kamalaharris.org/issues/education/" class="text-blue-500 hover:underline">[🔗]</a>
            </li>

            <li class="text-base">
                <b class="text-lg font-semibold">Support for Affordable Housing:</b>
                Kamala Harris wants to invest more in affordable housing and rental help to assist people dealing with high housing costs. Her plan includes building more homes, expanding rental assistance, and helping people with down payments for buying a house. 
                <a href="https://kamalaharris.org/issues/housing/" class="text-blue-500 hover:underline">[🔗]</a>
            </li>
        </ul>
`, "trump": `
        <ul class="space-y-4">
            <li class="text-base">
                <b class="text-lg font-semibold">Impact on Student Loan Relief:</b>
                Trump's administration rolled back some student loan relief measures, including limiting the expansion of income-driven repayment plans and reducing loan forgiveness options. These changes left many Millennials burdened with significant student debt. 
                <a href="https://www.nbcnews.com/news/us-news/trump-education-secretary-develops-new-student-loan-rules-rcna3288" class="text-blue-500 hover:underline">[🔗]</a>
            </li>

            <li class="text-base">
                <b class="text-lg font-semibold">Affordable Housing Crisis:</b>
                Trump's policies included cuts to HUD funding and opposition to new affordable housing initiatives. These actions contributed to rising housing costs and made it more difficult for Millennials, who are often first-time homebuyers or renters, to find affordable housing. 
                <a href="https://www.washingtonpost.com/business/2020/09/22/affordable-housing-trump/" class="text-blue-500 hover:underline">[🔗]</a>
            </li>
        </ul>
`};


function displayContent() {
    var conditionKey = "";
    ["age", "home", "parent", "work"].forEach((category) => {
        document.querySelectorAll('input[name="' + category + '"]').forEach(cb => {
            if (cb.checked) {
                conditionKey += cb.id
            }
        });
    });
    
    const resultContent = conditionsDict[conditionKey];
    const resultDiv = document.getElementById('result');

    if (resultContent != undefined) {
        resultDiv.innerHTML = "<h2 class=\"text-2xl font-bold mb-6\">Kamala Harris will:</h2>" + resultContent.kamala + "<br>" +
            "<h2 class=\"text-2xl font-bold mt-8 mb-4\">Conversely, Donald Trump will:</h2>" + resultContent.trump + "<br>";
    } else { 
        resultDiv.innerHTML = "<p>Woah, crazy combination here!</p>";
    }
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

function makeExclusive(checkbox) {
  const checkboxes = document.querySelectorAll('input[name=' + checkbox.name + ']');
  checkboxes.forEach(cb => {
    if (cb !== checkbox) {
      cb.checked = false;
    }
  });
}
