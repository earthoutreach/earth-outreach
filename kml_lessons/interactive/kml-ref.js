function getTagKmlRef(tag) {
  tag = tag.toLowerCase();
  if (tag in g_kmlRefLinks) {
    return {
      tag: g_kmlRefLinks[tag][0],
      refLink: 'http://code.google.com/apis/kml/documentation/kmlreference.html' + g_kmlRefLinks[tag][1]
    };
  }
  
  return null;
}

var g_kmlRefLinks = {
  'address': [ 'address', '#address' ],
  'addressdetails': [ 'AddressDetails', '#addressdetails' ],
  'alias': [ 'Alias', '#alias' ],
  'altitude': [ 'altitude', '#coordinates' ],
  'altitudemode': [ 'altitudeMode', '#altitudemode' ],
  
  // atom
  'atom:author': [ 'atom:author', '#atomauthor' ],
  'atom:link': [ 'atom:link', '#atomlink' ],
  'atom:name': [ 'atom:name', '#atomname' ],
  
  'balloonstyle': [ 'BalloonStyle', '#balloonstyle' ],
  'begin': [ 'begin', '#begin' ],
  'bgcolor': [ 'bgColor', '#bgcolor' ],
  'bottomfov': [ 'bottomFov', '#bottomfov' ],
  'camera': [ 'Camera', '#camera' ],
  'change': [ 'Change', '#change' ],
  'color': [ 'color', '#color' ],
  'colormode': [ 'colorMode', '#colormode' ],
  'colorstyle': [ 'ColorStyle', '#colorstyle' ],
  'cookie': [ 'cookie', '#cookie' ],
  'coordinates': [ 'coordinates', '#coordinates' ],
  'create': [ 'Create', '#create' ],
  'data': [ 'Data', '#data' ],
  'delete': [ 'Delete', '#delete' ],
  'description': [ 'description', '#description' ],
  'displaymode': [ 'displayMode', '#displaymode' ],
  'displayname': [ 'displayName', '#displayname' ],
  'document': [ 'Document', '#document' ],
  'draworder': [ 'drawOrder', '#draworder' ],
  'east': [ 'east', '#east' ],
  'end': [ 'end', '#end' ],
  'expires': [ 'expires', '#expires' ],
  'extendeddata': [ 'ExtendedData', '#extendeddata' ],
  'extrude': [ 'extrude', '#extrude' ],
  'fill': [ 'fill', '#fill' ],
  'flytoview': [ 'flyToView', '#flytoview' ],
  'folder': [ 'Folder', '#folder' ],
  'geomcolor': [ 'geomColor', '#geomcolor' ],
  'geometrycollection': [ 'GeometryCollection', '#geometrycollection' ],
  'geomscale': [ 'geomScale', '#geomscale' ],
  'gridorigin': [ 'gridOrigin', '#gridorigin' ],
  'groundoverlay': [ 'GroundOverlay', '#groundoverlay' ],

  // Google KML extensions
  'gx:altitudemode': [ 'gx:altitudeMode', '#gxaltitudemode' ],
  'gx:animatedupdate': [ 'gx:AnimatedUpdate', '#gxanimatedupdate' ],
  'gx:balloonvisibility': [ 'gx:balloonVisibility', '#gxballoonvisibility' ],
  'gx:duration': [ 'gx:duration', '#gxduration' ],
  'gx:flyto': [ 'gx:FlyTo', '#gxflyto' ],
  'gx:flytomode': [ 'gx:flyToMode', '#gxflytomode' ],
  'gx:latlonquad': [ 'gx:LatLonQuad', '#gxlatlonquad' ],
  'gx:playlist': [ 'gx:Playlist', '#gxplaylist' ],
  'gx:playmode': [ 'gx:playMode', '#gxplaymode' ],
  'gx:soundcue': [ 'gx:SoundCue', '#gxsoundcue' ],
  'gx:timespan': [ 'gx:TimeSpan', '#gxtimespan' ],
  'gx:timestamp': [ 'gx:TimeStamp', '#gxtimestamp' ],
  'gx:tour': [ 'gx:Tour', '#gxtour' ],
  'gx:tourcontrol': [ 'gx:TourControl', '#gxtourcontrol' ],
  'gx:tourprimitive': [ 'gx:TourPrimitive', '#gxtourprimitive' ],
  'gx:wait': [ 'gx:Wait', '#gxwait' ],

  'h': [ 'h', '#h' ],
  'heading': [ 'heading', '#heading' ],
  'href': [ 'href', '#href' ],
  'hotspot': [ 'hotSpot', '#hotspot' ],
  'httpquery': [ 'httpQuery', '#httpquery' ],
  'icon': [ 'Icon', '#icon' ],
  'iconstyle': [ 'IconStyle', '#iconstyle' ],
  'imagepyramid': [ 'ImagePyramid', '#imagepyramid' ],
  'innerboundaryis': [ 'innerBoundaryIs', '#innerboundaryis' ],
  'itemicon': [ 'ItemIcon', '#itemicon' ],
  'key': [ 'key', '#key' ],
  'kml': [ 'kml', '#kml' ],
  'labelcolor': [ 'labelColor', '#labelcolor' ],
  'labelstyle': [ 'LabelStyle', '#labelstyle' ],
  'latitude': [ 'latitude', '#latitude' ],
  'latlonaltbox': [ 'LatLonAltBox', '#latlonaltbox' ],
  'latlonbox': [ 'LatLonBox', '#latlonbox' ],
  'leftfov': [ 'leftFov', '#leftfov' ],
  'linearring': [ 'LinearRing', '#linearring' ],
  'linestring': [ 'LineString', '#linestring' ],
  'linestyle': [ 'LineStyle', '#linestyle' ],
  'link': [ 'Link', '#link' ],
  'linkdescription': [ 'linkDescription', '#linkdescription' ],
  'linkname': [ 'linkName', '#linkname' ],
  'linksnippet': [ 'linkSnippet', '#linksnippet' ],
  'listitemtype': [ 'listItemType', '#listItemType' ],
  'liststyle': [ 'ListStyle', '#liststyle' ],
  'location': [ 'Location', '#location' ],
  'lod': [ 'Lod', '#lod' ],
  'longitude': [ 'longitude', '#longitude' ],
  'lookat': [ 'LookAt', '#lookat' ],
  'maxaltitude': [ 'maxAltitude', '#maxaltitude' ],
  'maxfadeextent': [ 'maxFadeExtent', '#maxfadeextent' ],
  'maxheight': [ 'maxHeight', '#maxheight' ],
  'maxlodpixels': [ 'maxLodPixels', '#maxlodpixels' ],
  'maxsessionlength': [ 'maxSessionLength', '#maxsessionlength' ],
  'maxwidth': [ 'maxWidth', '#maxwidth' ],
  'message': [ 'message', '#message' ],
  'metadata': [ 'Metadata', '#metadata' ],
  'minaltitude': [ 'minAltitude', '#minaltitude' ],
  'minfadeextent': [ 'minFadeExtent', '#minfadeextent' ],
  'minlodpixels': [ 'minLodPixels', '#minlodpixels' ],
  'minrefreshperiod': [ 'minRefreshPeriod', '#minrefreshperiod' ],
  'model': [ 'Model', '#model' ],
  'multigeometry': [ 'MultiGeometry', '#multigeometry' ],
  'name': [ 'name', '#name' ],
  'near': [ 'near', '#near' ],
  'networklink': [ 'NetworkLink', '#networklink' ],
  'networklinkcontrol': [ 'NetworkLinkControl', '#networklinkcontrol' ],
  'north': [ 'north', '#north' ],
  'open': [ 'open', '#open' ],
  'orientation': [ 'Orientation', '#orientation' ],
  'outerboundaryis': [ 'outerBoundaryIs', '#outerboundaryis' ],
  'outline': [ 'outline', '#outline' ],
  'overlayxy': [ 'overlayXY', '#overlayxy' ],
  'pair': [ 'Pair', '#pair' ],
  'phonenumber': [ 'phoneNumber', '#phonenumber' ],
  'photooverlay': [ 'PhotoOverlay', '#photooverlay' ],
  'placemark': [ 'Placemark', '#placemark' ],
  'point': [ 'Point', '#point' ],
  'polygon': [ 'Polygon', '#polygon' ],
  'polystyle': [ 'PolyStyle', '#polystyle' ],
  'range': [ 'range', '#range' ],
  'refreshinterval': [ 'refreshInterval', '#refreshinterval' ],
  'refreshmode': [ 'refreshMode', '#refreshmode' ],
  'refreshvisibility': [ 'refreshVisibility', '#refreshvisibility' ],
  'region': [ 'Region', '#region' ],
  'resourcemap': [ 'ResourceMap', '#resourcemap' ],
  'rightfov': [ 'rightFov', '#rightFov' ],
  'roll': [ 'roll', '#roll' ],
  'rotation': [ 'rotation', '#rotation' ],
  'rotationxy': [ 'rotationXY', '#rotationxy' ],
  'scale': [ 'Scale', '#scale2' ],
  'scale': [ 'scale', '#scale' ],
  'schema': [ 'Schema', '#schema' ],
  'schemadata': [ 'SchemaData', '#schemadata' ],
  'screenoverlay': [ 'ScreenOverlay', '#screenoverlay' ],
  'screenxy': [ 'screenXY', '#screenxy' ],
  'shape': [ 'shape', '#shape' ],
  'simpledata': [ 'SimpleData', '#simpledata' ],
  'simplefield': [ 'SimpleField', '#simplefield' ],
  'size': [ 'size', '#size' ],
  'snippet': [ 'Snippet', '#snippet' ],
  'south': [ 'south', '#south' ],
  'state': [ 'state', '#state' ],
  'style': [ 'Style', '#style' ],
  'stylemap': [ 'StyleMap', '#stylemap' ],
  'styleurl': [ 'styleUrl', '#styleurl' ],
  'targethref': [ 'targetHref', '#targethref' ],
  'tessellate': [ 'tessellate', '#tessellate' ],
  'text': [ 'text', '#text' ],
  'textcolor': [ 'textcolor', '#textcolor' ],
  'tilesize': [ 'tileSize', '#tilesize' ],
  'tilt': [ 'tilt', '#tilt' ],
  'timespan': [ 'TimeSpan', '#timespan' ],
  'timestamp': [ 'TimeStamp', '#timestamp' ],
  'topfov': [ 'topFov', '#topfov' ],
  'update': [ 'Update', '#update' ],
  'url': [ 'Url', '#url' ],
  'value': [ 'value', '#value' ],
  'viewboundscale': [ 'viewBoundScale', '#viewboundscale' ],
  'viewformat': [ 'viewFormat', '#viewformat' ],
  'viewrefreshmode': [ 'viewRefreshMode', '#viewrefreshmode' ],
  'viewrefreshtime': [ 'viewRefreshTime', '#viewrefreshtime' ],
  'viewvolume': [ 'ViewVolume', '#viewvolume' ],
  'visibility': [ 'visibility', '#visibility' ],
  'w': [ 'w', '#w' ],
  'west': [ 'west', '#west' ],
  'when': [ 'when', '#when' ],
  'width': [ 'width', '#width' ],
  'x': [ 'x', '#x' ],
  'y': [ 'y', '#y' ]
};
