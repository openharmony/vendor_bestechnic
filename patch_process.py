
import os
import sys
import importlib

product = sys.argv[1]
def read_yaml_file(input_file: str):
    yaml = importlib.import_module('yaml')
    with open(input_file, 'rt', encoding='utf-8') as yaml_file:
            return yaml.safe_load(yaml_file)


current_path = os.getcwd()
patch_cfg = os.path.join(current_path, '{0}/patch.yml'.format(product))
print("patch_cfg:",patch_cfg)

patch_cfg_dict = read_yaml_file(patch_cfg)
for src_path, patch_list in patch_cfg_dict.items():
    # patch_apply(src_path, patch_list, 0)
    # print("src_path:",src_path)
    # print("patch_list:",patch_list)
    for patch in patch_list:
        os.system("cd {0};git clean -fdx;git checkout .;patch -p1 < {1}/{2};cd -".format(src_path, current_path,patch))

# patch -p1 -R <