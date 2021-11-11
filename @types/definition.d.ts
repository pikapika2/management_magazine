type Props{
  data: strin

  g;
}

export type Schema$Volume {
    searchInfo?: {textSnippet?: string} | null;
    /**
     * URL to this resource. (In LITE projection.)
     */
    selfLink?: string | null;
    /**
     * General volume information.
     */
    volumeInfo?: {
      allowAnonLogging?: boolean;
      authors?: string[];
      averageRating?: number;
      canonicalVolumeLink?: string;
      categories?: string[];
      comicsContent?: boolean;
      contentVersion?: string;
      description?: string;
      dimensions?: {height?: string; thickness?: string; width?: string};
      imageLinks?: {
        extraLarge?: string;
        large?: string;
        medium?: string;
        small?: string;
        smallThumbnail?: string;
        thumbnail?: string;
      };
      industryIdentifiers?: Array<{identifier?: string; type?: string}>;
      infoLink?: string;
      language?: string;
      mainCategory?: string;
      maturityRating?: string;
      pageCount?: number;
      panelizationSummary?: {
        containsEpubBubbles?: boolean;
        containsImageBubbles?: boolean;
        epubBubbleVersion?: string;
        imageBubbleVersion?: string;
      };
      previewLink?: string;
      printType?: string;
      printedPageCount?: number;
      publishedDate?: string;
      publisher?: string;
      ratingsCount?: number;
      readingModes?: {image?: boolean; text?: boolean};
      samplePageCount?: number;
      seriesInfo?: Schema$Volumeseriesinfo;
      subtitle?: string;
      title?: string;
    } | null;
  }

type volumeInfo{
  title:
  authors:
  publisher:
  publishedDate:
  description:

}

