# What are common attributes of image _tags_?
>Common attributes of an ````<img>```` _tag_ include the _'src attribute'_ which defines the **absolute** or _relative path_ where the image is, and the _'alt attribute'_ which is a highly **descriptive text** for accessibility purposes. Moreover, **height** and _width_ are common _attributes_ as well in order to ensure the image renders properly on the **page**.
>## How can you fill up an _element_ with an **image**?
You can fill up an _element_ with an **image** using the _width attribute_, and in turn setting it to **100%**.
>### How can you load a _smaller_ version of the **image**?
You can load a _smaller_ version of the **image** through converting its **format** to a more compressed and smaller one.
>### How do you save load times through _sizing_ **images** appropriately?
To optimize load times, the appropriate **image formats** and _sizes_ must be used in their respective applications. **JPG's** should be used when displaying _product photos_, _portraits_, and other images where **color variance** is _crucial_. Their type of **compression** is one that made the **image** smaller by taking out color elements _invisible_ to the human eye.
_GIFs_ should be used when displaying **logos** and _graphs_, or for **images** where _transparency_ is of importance, they shouldn't be used for **images** where _color variance_ is important because _GIFs_ are only limited to **256 colors**.
**_PNGs_** were created as an alternative to _GIFs_ with **5-25% greater compression**. On top of supporting _transparency_, its degree can also be tweaked by users. They also load twice as fast as _GIFs_, they are usually used to display **logos**.
**SVG** are impervious to loss of quality when their _sizes_ are increased, as opposed to **JPGs** whose quality severely deteriorates in case of extreme enlargement. **SVGs** are _vector-based_ instead of **rasters** who're _pixel-based_. **SVGs** also support _animation_ but only on a _2D plane_.
> ##### Which file types use _transparent_ colors?
_GIFs_ and **_PNGs_** both use _transparent_ colors with varying degrees, with the latter having the ability for users to control its degree.
> ##### Which file types use _animation_?
_GIFs_ and **SVGs** both support _animation_, although **SVGs** can only support _two-dimensional animation_.

### When should **images** be stored on the _server_ as opposed to _externally_?
>**Images** should be stored _externally_ if they're too big, not as relevant to the content, and is borrowed from somewhere else. Whilst the more relevant and important **images** should be stored on the _server_.

#### What's the best **format** for **photos** and _graphics_?
>**JPG** is the best **format** for **photos** due to its high _color variance_, making it display **photos** with almost perfect _color variance_.
_GIFs_ and **_PNGs_** are the best **formats** to display _graphics_ due to _color variance_ not being of crucial importance, and them supporting _transparency_.
>#### Which format lets you scale the image as big as you want?
**SVGs** let you scale an image as _big_ as it can without detracting from the quality, since it is **vector-based** as opposed to other **image formats**, which are _rasters_. **Vector-based images** are much simpler in that instead of _300 dots per inch of colors_ (_as with JPGs_) in such small spaces, **SVGs** are composed mathematically as opposed to chromatically, in that they are just a mathematical equation with **4 points** instead of potentially thousands.
>#### What's the difference between _raster_ and **vector** images?
_Raster images_ are composed of **colored pixels**, making them more meticulously composed, more chromatically malleable, and have greater _color variance_. On the other hand, **vector images** are composed of a mathematical equation which specifies _start_ and _end points_ where the shape takes place, hence why when enlarged, it maintains the quality and isn't blurry. Whereas with a **JPG**, when enlarged, the computer approximates the additional _pixels_ and their _colors_ since it's impossible for it to precisely determine the exact shades of _colors_ of the **image**.

##### How can you add **audio** or _video_ to your page?
>You can add **audio** or _video_ to a page using either the ````<audio>```` or the ````<video>```` _tags_ and specifying its _'src'_ **attribute**, or elsewhere using a ````<source>```` _tag_ with either an **absolute** or _relative path_. The ````<video>````/````<audio>```` _tags_ must have a **Boolean attribute** (of no value) of either **controls**, _loop_, or **_autoplay_**. **_Autoplay_** plays the **_audio/video_** upon launching the _page_, _loop_ as you can guess loops the content infinitely, and finally **controls** adds a _seeker, time, a pause/play button and volume controls_ that are defaulted in your **browser**.
