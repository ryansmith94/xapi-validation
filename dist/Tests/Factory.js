"use strict";
var requireTest = function (rule) { return function (test) {
    return require(rule).default(test);
}; };
exports.account = requireTest('./SchemaRules/Account');
exports.activity = requireTest('./SchemaRules/Activity');
exports.actor = requireTest('./SchemaRules/Actor');
exports.agent = requireTest('./SchemaRules/Agent');
exports.attachment = requireTest('./SchemaRules/Attachment');
exports.authority = requireTest('./SchemaRules/Authority');
exports.boolean = requireTest('./Values/Boolean');
exports.context = requireTest('./SchemaRules/Context');
exports.contextActivities = requireTest('./SchemaRules/ContextActivities');
exports.definition = requireTest('./SchemaRules/Definition');
exports.duration = requireTest('./RegexValues/Duration');
exports.extensions = requireTest('./Maps/Extensions');
exports.group = requireTest('./SchemaRules/Group');
exports.imt = requireTest('./RegexValues/Imt');
exports.integer = requireTest('./Values/Integer');
exports.interactionComponent = requireTest('./SchemaRules/InteractionComponent');
exports.interactionType = requireTest('./RegexValues/InteractionType');
exports.iri = requireTest('./RegexValues/Iri');
exports.language = requireTest('./RegexValues/Language');
exports.languageMap = requireTest('./Maps/LanguageMap');
exports.mailto = requireTest('./RegexValues/Mailto');
exports.number = requireTest('./Values/Number');
exports.object = requireTest('./SchemaRules/Object');
exports.result = requireTest('./SchemaRules/Result');
exports.scaled = requireTest('./Values/Scaled');
exports.score = requireTest('./SchemaRules/Score');
exports.sha1 = requireTest('./RegexValues/Sha1');
exports.statement = requireTest('./SchemaRules/Statement');
exports.statementRef = requireTest('./SchemaRules/StatementRef');
exports.string = requireTest('./Values/String');
exports.subStatement = requireTest('./SchemaRules/SubStatement');
exports.subStatementObject = requireTest('./SchemaRules/SubStatementObject');
exports.timestamp = requireTest('./RegexValues/Timestamp');
exports.uuid = requireTest('./RegexValues/Uuid');
exports.verb = requireTest('./SchemaRules/Verb');
exports.version = requireTest('./RegexValues/Version');
