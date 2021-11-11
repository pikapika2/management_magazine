type Schema$Volumes = {
    /**
     * A list of volumes.
     */
    items?: Schema$Volume[];
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * Total number of volumes found. This might be greater than the number of volumes returned in this response if results have been paginated.
     */
    totalItems?: number | null;
}

type Schema$Volume = {
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
      //averageRating?: number;
      canonicalVolumeLink?: string;
      categories?: string[];
      //comicsContent?: boolean;
      contentVersion?: string;
      description?: string;
      //dimensions?: {height?: string; thickness?: string; width?: string};
      imageLinks?: {
        //extraLarge?: string;
        //large?: string;
        //medium?: string;
        //small?: string;
        smallThumbnail?: string;
        thumbnail?: string;
      };
      industryIdentifiers?: Array<{identifier?: string; type?: string}>;
      infoLink?: string;
      language?: string;
      //mainCategory?: string;
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
      //printedPageCount?: number;
      publishedDate?: string;
      publisher?: string;
      //ratingsCount?: number;
      readingModes?: {image?: boolean; text?: boolean};
      //samplePageCount?: number;
      seriesInfo?: Schema$Volumeseriesinfo;
      //subtitle?: string;
      title?: string;
    } | null;
  }

type Schema$Volumeseriesinfo = {
    /**
     * The display number string. This should be used only for display purposes and the actual sequence should be inferred from the below orderNumber.
     */
    bookDisplayNumber?: string | null;
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * Short book title in the context of the series.
     */
    shortSeriesBookTitle?: string | null;
    volumeSeries?: Array<{
      //issue?: Array<{issueDisplayNumber?: string; issueOrderNumber?: number}>;
      orderNumber?: number;
      seriesBookType?: string;
      seriesId?: string;
    }> | null;
  }