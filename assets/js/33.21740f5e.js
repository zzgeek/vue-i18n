(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{486:function(a,s,t){"use strict";t.r(s);var e=t(44),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"fallback-localizacao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fallback-localizacao"}},[a._v("#")]),a._v(" Fallback Localização")]),a._v(" "),t("p",[t("em",[a._v("Resumo: Use "),t("code",[a._v("fallbackLocale: '<lang>'")]),a._v(" para escolher qual idioma usar quando seu idioma preferido não tiver uma tradução.")])]),a._v(" "),t("h2",{attrs:{id:"fallback-implicito-usando-localidades"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fallback-implicito-usando-localidades"}},[a._v("#")]),a._v(" Fallback implícito usando localidades")]),a._v(" "),t("p",[a._v("Se um "),t("code",[a._v("locale")]),a._v(" é fornecido contendo um território e um dialeto opcional, o fallback implícito é ativado automaticamente.")]),a._v(" "),t("p",[a._v("Por exemplo, para "),t("code",[a._v("de-DE-bavarian")]),a._v(" o seguinte será considerado como fallback:")]),a._v(" "),t("ol",[t("li",[t("code",[a._v("de-DE-bavarian")])]),a._v(" "),t("li",[t("code",[a._v("de-DE")])]),a._v(" "),t("li",[t("code",[a._v("de")])])]),a._v(" "),t("p",[a._v("Para desativar a detecção automática de locais de fallback, especifique o caractere "),t("code",[a._v("!")]),a._v(", Por exemplo, "),t("code",[a._v("de-DE!")])]),a._v(" "),t("h2",{attrs:{id:"fallback-explicito-com-um-local"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fallback-explicito-com-um-local"}},[a._v("#")]),a._v(" Fallback explícito com um local")]),a._v(" "),t("p",[a._v("Às vezes, alguns itens não são traduzidas para outros idiomas. Neste exemplo, o item "),t("code",[a._v("hello")]),a._v(" está disponível no idioma inglês, mas não no português:")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" messages "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  en"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    hello"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Hello, world!'")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  pt"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Localização sem tradução para `hello`")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("Se você deseja usar (digamos) mensagens de localização de "),t("code",[a._v("en")]),a._v(", quando a tradução não está na localização desejada, você deve defina a opção "),t("code",[a._v("fallbackLocale")]),a._v(" ao inicializar a instância "),t("code",[a._v("VueI18n")]),a._v(":")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" i18n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("VueI18n")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  locale"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'pt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  fallbackLocale"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'en'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  messages\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("Template:")]),a._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("{{ $t('hello') }}"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),t("p",[a._v("O resultado será o seguinte:")]),a._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("Hello, world!"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),t("p",[a._v("Por padrão, se as mensagens de localização de fallback de "),t("code",[a._v("fallbackLocale")]),a._v(" foram usadas, os avisos serão exibidos no console:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[vue-i18n] Value of key 'hello' is not a string!\n[vue-i18n] Fall back to translate the keypath 'hello' with 'en' locale.\n")])])]),t("p",[a._v("Para ocultar esses avisos (deixando aqueles em casos em que não há traduções para a chave fornecida), defina "),t("code",[a._v("silentFallbackWarn: true")]),a._v(" ao inicializar a instância "),t("code",[a._v("VueI18n")]),a._v(".")]),a._v(" "),t("h2",{attrs:{id:"fallback-explicito-com-um-array-de-localidades"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fallback-explicito-com-um-array-de-localidades"}},[a._v("#")]),a._v(" Fallback explícito com  um array de localidades")]),a._v(" "),t("p",[a._v("Você pode especificar mais de um local de fallback usando um array.")]),a._v(" "),t("p",[a._v("Por exemplo:")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("fallbackLocale"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'pt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'en'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),t("h2",{attrs:{id:"fallback-explicito-com-mapas-de-decisao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fallback-explicito-com-mapas-de-decisao"}},[a._v("#")]),a._v(" Fallback explícito com mapas de decisão")]),a._v(" "),t("p",[a._v("Um algoritmo de tomada de decisão mais complexo para determinar o local de fallback pode ser implementado usando mapas de decisão com localidades em um fallback de acordo.")]),a._v(" "),t("p",[a._v("Por exemplo, usando o seguinte mapa de decisão")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("fallbackLocale"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* 1 */")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'de-CH'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'fr'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'it'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* 2 */")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'zh-Hant'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'zh-Hans'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* 3 */")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'es-CL'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'es-AR'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* 4 */")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'es'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'en-GB'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* 5 */")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'pt'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'es-AR'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* 6 */")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'default'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'en'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'ru'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),t("p",[a._v("Resultará nas seguintes cadeias de fallback")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("Local")]),a._v(" "),t("th",[a._v("fallback escolha")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[t("code",[a._v("'de-CH'")])]),a._v(" "),t("td",[a._v("de-CH > fr > it > en > ru")])]),a._v(" "),t("tr",[t("td",[t("code",[a._v("'de'")])]),a._v(" "),t("td",[a._v("de > en > ru")])]),a._v(" "),t("tr",[t("td",[t("code",[a._v("'zh-Hant'")])]),a._v(" "),t("td",[a._v("zh-Hant > zh-Hans > zh > en > ru")])]),a._v(" "),t("tr",[t("td",[t("code",[a._v("'es-SP'")])]),a._v(" "),t("td",[a._v("es-SP > es > en-GB > en > ru")])]),a._v(" "),t("tr",[t("td",[t("code",[a._v("'es-SP!'")])]),a._v(" "),t("td",[a._v("es-SP > en > ru")])]),a._v(" "),t("tr",[t("td",[t("code",[a._v("'fr'")])]),a._v(" "),t("td",[a._v("fr > en > ru")])]),a._v(" "),t("tr",[t("td",[t("code",[a._v("'pt-BR'")])]),a._v(" "),t("td",[a._v("pt-BR > pt > es-AR > es > en-GB > en > ru")])]),a._v(" "),t("tr",[t("td",[t("code",[a._v("'es-CL'")])]),a._v(" "),t("td",[a._v("es-CL > es-AR > es > en-GB > en > ru")])])])]),a._v(" "),t("h2",{attrs:{id:"fallback-interpolacao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fallback-interpolacao"}},[a._v("#")]),a._v(" Fallback interpolação")]),a._v(" "),t("ul",[t("li",[a._v("Resumo: Defina "),t("code",[a._v("formatFallbackMessages: true")]),a._v(" para fazer a interpolação do modelo nas chaves de tradução quando seu idioma não tiver uma tradução para uma chave. *")])]),a._v(" "),t("p",[a._v("Como as chaves para as traduções são strings, você pode usar uma mensagem legível pelo usuário como uma chave (para um idioma específico).")]),a._v(" "),t("p",[a._v("Por exemplo:")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" messages "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  pt"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Hello, world!'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Olá Mundo!'")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v('Isso pode ser útil porque você não precisa especificar uma tradução para o "Hello, world!" na localização em inglês.')]),a._v(" "),t("p",[a._v("Na verdade, você pode até incluir parâmetros de modelo em uma chave. Junto com "),t("code",[a._v("formatFallbackMessages: true")]),a._v(', isso permite pular a escrita de modelos para o seu idioma base" e as chaves '),t("em",[a._v("são")]),a._v(" seus modelos.")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" messages "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  pt"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Hello {name}'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Olá {name}'")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" i18n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("VueI18n")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  locale"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'pt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  fallbackLocale"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'en'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  formatFallbackMessages"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  messages\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("Template:")]),a._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("{{ $t('Hello {name}', { name: 'John' }}) }}"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("{{ $t('The weather today is {condition}!', { condition: 'sunny' }) }}"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),t("p",[a._v("O resultado será o seguinte:")]),a._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("Olá, John"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("The weather today is sunny!"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);