"""Download and prepare the Therapeutics Data Commons (TDC) ADMET Benchmark Group datasets."""
from pathlib import Path

from tdc import utils
from tdc.benchmark_group import admet_group
from tqdm import tqdm

from constants import ADMET_GROUP_SEEDS


def tdc_admet_group_prepare(
        save_dir: Path
) -> None:
    """Download and prepare the Therapeutics Data Commons (TDC) ADMET Benchmark Group datasets.

    :param save_dir: A directory where the TDC AMDET Benchmark Group data will be saved.
    """
    # Get ADMET Benchmark Group dataset names from TDC
    data_names = utils.retrieve_benchmark_names('ADMET_Group')

    # Download/access the ADMET group
    group = admet_group(path=save_dir)

    # Prepare each dataset
    for data_name in tqdm(data_names):
        # Load dataset
        benchmark = group.get(data_name)

        # Get name
        name = benchmark['name']

        # Make data directory
        benchmark_dir = save_dir / name
        benchmark_dir.mkdir(parents=True, exist_ok=True)

        # Split data into train_val and test
        train_val, test = benchmark['train_val'], benchmark['test']

        # Save test data
        test.to_csv(benchmark_dir / 'test.csv')

        # Split train_val into 5-fold CV
        for seed in ADMET_GROUP_SEEDS:
            # Split train_val into train and val
            train, valid = group.get_train_valid_split(benchmark=name, split_type='default', seed=seed)

            # Make seed directory
            seed_dir = benchmark_dir / str(seed)
            seed_dir.mkdir(parents=True, exist_ok=True)

            # Save train and val data
            train.to_csv(seed_dir / 'train.csv')
            valid.to_csv(seed_dir / 'val.csv')


if __name__ == '__main__':
    from tap import tapify

    tapify(tdc_admet_group_prepare)