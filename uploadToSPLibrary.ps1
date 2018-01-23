# Title: Upload To SharePoint Library
# Author: Nick Hendricks
# Version: 0.1.0
# Directions For Use: 
#  (1) update the $uri parameter to match the SharePoint library to which you wish to upload files
#  (2) use the npm script 'npm run spUpload' to upload any bundled resources found in the './spApp' directory
# Notes Regarding Use:
#  This script will only work in the following conditions: 
#    (1) It is located in the base directory of the project
#    (2) The application is being built into the './spApp' directory
#    (3) The URI is properly input prior to running the script
# Someday I'll make this much nicer, to include
#  (1) initial inputs (with defaults) for the library URI and the project spApp directory (if altered)
#  (2) graceful handling of error conditions for improper paths or no files
# Happy Dev'ing!

$uri="https://tsps.ncsecu.local/demo/S22307N/SiteAssets/spApp/"
$path = Get-Location
Get-ChildItem -Path ./spApp -r | foreach {        
    $fullUri = $uri + $_
    $fullPath = $path.ToString() + '\spApp\' + $_
    Invoke-WebRequest -Uri $fullUri -InFile $fullPath -Method Put -UseDefaultCredentials    
}
Get-ChildItem -Path ./spApp -r | foreach {        
    $fullUri = $uri + $_
    $fullPath = $path.ToString() + '\spApp\' + $_
    write-host 'uploaded' $_.Name 'to' $fullUri
}
