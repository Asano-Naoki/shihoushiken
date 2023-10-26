<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	
    <xsl:output method="html" encoding="UTF-8"/>

	<!-- ルート階層-->
	<xsl:template match="/">
    <html>
        <body>
            <xsl:apply-templates />
        </body>
    </html>
	</xsl:template>

    <!-- コードを消す -->
	<xsl:template match="Code">
        <xsl:copy/>
	</xsl:template>

    <!-- 法律IDを消す -->
	<xsl:template match="LawId">
        <xsl:copy/>
	</xsl:template>

    <!-- 法律番号 -->
	<xsl:template match="LawNum">
        <div id="lawTitleNo" style="font-size: 1.067rem; font-weight: bold;"><xsl:value-of select="."/></div>
	</xsl:template>

	<!-- タイトル -->
	<xsl:template match="LawTitle">
        <div id="lawTitle" style="margin-left: 3rem; font-size: 1.5rem; font-weight: bold; line-height: 1.25em;"><xsl:value-of select="."/></div>
	</xsl:template>

	<!-- 前文 -->
	<xsl:template match="Preamble">
        <section id="Preamble" class="active Preamble" style="display:clock; padding-bottom: 10px;"><xsl:apply-templates /></section>
    </xsl:template>

	<!-- 条 -->
	<xsl:template match="Article">
        <div style="margin-left: 1em; text-indent: -1em;" id="Mp-At_1-Pr_1" class="_div_ArticleTitle"><xsl:apply-templates /></div>
    </xsl:template>

	<!-- 段落文 -->
	<xsl:template match="Preamble/Paragraph/ParagraphSentence/Sentence">
        <div style="text-indent: 1em;" class="_div_ParagraphSentence"><xsl:value-of select="."/></div>
    </xsl:template>

	<!-- 章 -->
	<xsl:template match="ChapterTitle">
        <section>
            <div style="margin-left: 3em; font-weight: bold;" class="ChapterTitle _div_ChapterTitle"><xsl:value-of select="."/></div>
        </section>
    </xsl:template>

	<!-- 第○条 -->
	<xsl:template match="ArticleTitle">
        <span style="font-weight: bold;"><xsl:value-of select="."/>　</span>
    </xsl:template>

</xsl:stylesheet>